import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import * as jwt from 'jsonwebtoken';

const secret = 'secret';

@Injectable()
export class DatabaseService {
  constructor() {
    this.initializeDatabase();
  }
  private pool: mysql.Pool;

  private initializeDatabase() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'city_portal',
      connectionLimit: 10, // Adjust as needed
    });
  }

  async create_user(userDate): Promise<any> {
    const connection = await this.pool.getConnection();
    const result = await connection
      .execute(
        `
      SELECT COUNT(*) FROM users WHERE fio = '${userDate.fio}' OR login = '${userDate.login}' OR email = '${userDate.email}'`,
      )
      .then(async (result) => {
        if (result[0][0]['COUNT(*)'] > 0) {
          connection.release();
          return result[0][0]['COUNT(*)'];
        } else {
          connection.release();
          const [insertUser] = await connection.execute(
            `
          INSERT INTO users (fio, login, email, password) VALUES (?, ?, ?, ?)`,
            [userDate.fio, userDate.login, userDate.email, userDate.password],
          );
          connection.release();
          userDate.id = insertUser['insertId'];
          const generateJWT = await this.generateJWT(userDate);
          return generateJWT;
        }
      })
      .catch((error) => {
        connection.release();
        return error;
      });
    return result;
  }

  async check_user(userData): Promise<any> {
    const connection = await this.pool.getConnection();
    const result = await connection
      .execute(
        `
      SELECT count(*) as 'count', id, fio, login, email FROM users WHERE login = '${userData.login}' AND password = '${userData.password}' GROUP BY 'count', id, fio, login, email, password`,
      )
      .then(async (result) => {
        console.log(result);
        if (result[0][0] !== undefined) {
          userData.id = result[0][0]['id'];
          userData.fio = result[0][0]['fio'];
          userData.login = result[0][0]['login'];
          userData.email = result[0][0]['email'];

          const generateJWT = await this.generateJWT(userData)
            .then((generateJWTresult) => {
              // console.log(generateJWTresult);
              return generateJWTresult;
            })
            .catch((error) => {
              console.log(error);
              return error;
            });

          return generateJWT;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    // console.log(result);

    return result;
  }

  async generateJWT(userData) {
    const payload = {
      id: userData.id,
      data: userData,
    };
    return jwt.sign(payload, secret);
  }

  async decodeJWT(token) {
    const tokenDecode = jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return { status: false, error: err, errorMessage: err.message };
      } else if (decoded) {
        return decoded;
      }
    });
    return tokenDecode;
  }

  async create_task(taskData) {
    const connection = await this.pool.getConnection();
    console.log(taskData);

    const result = await connection
      .execute(
        `
      SELECT COUNT(*) FROM statements WHERE title = '${taskData.title}'`,
      )
      .then(async (result) => {
        if (result[0][0]['COUNT(*)'] > 0) {
          connection.release();
          return {
            status: false,
            data: result[0][0]['COUNT(*)'],
            message: 'Заявление с таким названием уже существует!',
          };
        } else {
          connection.release();
          const insertTask = await connection
            .execute(
              `
          INSERT INTO statements (user_id, title, description) VALUES (?, ?, ?)`,
              [taskData.user_id, taskData.title, taskData.description],
            )
            .then((res) => {
              console.log(res);
              return { status: true, data: res, message: 'Создана!' };
            })
            .catch((err) => {
              console.log(err);
              return { status: false, datas: err, message: err.message };
            });
          connection.release();

          return insertTask;
        }
      })
      .catch((error) => {
        connection.release();
        return { status: false, datas: error, message: error.message };
        return error;
      });
    return result;
  }

  async getTasks(id): Promise<any> {
    const connection = await this.pool.getConnection();
    const result = await connection.execute(
      `
      SELECT id,title,description, created_at FROM statements WHERE user_id = '${id}'`,
    );
    connection.release();
    return result;
  }

  async deleteTask(id): Promise<any> {
    const connection = await this.pool.getConnection();
    const result = await connection.execute(
      `
      DELETE FROM statements WHERE id = '${id}'`,
    );
    connection.release();
    console.log(result);

    return result;
  }
}
