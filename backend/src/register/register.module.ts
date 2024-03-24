// tasks.module.ts

import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { DatabaseService } from 'src/database/database.service'; // Импортируем сервис базы данных

@Module({
  controllers: [RegisterController],
  providers: [DatabaseService], // Добавляем сервис базы данных в провайдеры
})
export class TasksModule {}
