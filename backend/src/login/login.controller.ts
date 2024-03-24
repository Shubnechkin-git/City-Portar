import { Controller, Post, Body } from '@nestjs/common';
import { userData } from 'src/interface/userData';

@Controller('login')
export class LoginController {
  @Post('login')
  async login(
    @Body() userData: userData,
  ): Promise<{ status: boolean; message: string }> {
    return { status: true, message: 'Пользователь авторизован' };
    return { status: false, message: 'Пользователь не авторизован' };
  }
}
