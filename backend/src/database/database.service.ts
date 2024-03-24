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
    const [result] = await connection.execute(
      `
    INSERT INTO users (fio, login, email, password) VALUES (?, ?, ?, ?)`,
      [userDate.fio, userDate.login, userDate.email, userDate.password],
    );
    connection.release();
    return result;
  }
}
