import { Controller, Post, Body } from '@nestjs/common';
import { userData } from 'src/interface/userData';
import { DatabaseService } from 'src/database/database.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('create_user')
  async register(@Body() userData: userData): Promise<any> {
    const result = await this.databaseService
      .create_user(userData)
      .then(async (result) => {
        console.log(result);
        if (result > 0) return { status: false, message: 'Уже существует!' };
        else {
          return {
            status: true,
            data: { token: result },
            message: 'Пользователь добавлен!',
          };
        }
      })
      .catch((error) => {
        return { status: false, data: error, message: error.message };
      });
    console.log('new:', result);
    return result;
  }
}
