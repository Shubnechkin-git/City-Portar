import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { DatabaseService } from './database/database.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, RegisterController, UserController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
