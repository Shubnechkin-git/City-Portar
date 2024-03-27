import { Controller, Post, Body } from '@nestjs/common';
import { userData } from 'src/interface/userData';
import { DatabaseService } from 'src/database/database.service';

@Controller('login')
export class LoginController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post()
  async login(@Body() userData: userData): Promise<any> {
    const result = await this.databaseService
      .check_user(userData)
      .then((result) => {
        if (result !== null) {
          return {
            status: true,
            data: { token: result },
            message: 'Пользователь авторизован',
          };
        } else
          return {
            status: false,
            message: 'Пользователь не найден!',
          };
      })
      .catch((error) => {
        console.log(error);

        return {
          status: false,
          data: error,
          message: error.message,
        };
      });
    return result;
  }
}
