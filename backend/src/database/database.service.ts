import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

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
          return insertUser;
        }
      })
      .catch((error) => {
        connection.release();
        return error;
      });
    return result;
  }

  async check_user() {
    return 'Авторизация выполнена!';
  }
}
