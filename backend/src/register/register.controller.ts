import { Controller, Post, Body } from '@nestjs/common';
import { userData } from 'src/interface/userData';
import { DatabaseService } from 'src/database/database.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('create_user')
  async register(
    @Body() userData: userData,
  ): Promise<{ status: boolean; message: string }> {
    const result = await this.databaseService.create_user(userData);
    return { status: true, message: result };
    return { status: false, message: 'Пользователь не авторизован' };
  }
}
