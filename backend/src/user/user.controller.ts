import {
  Controller,
  Get,
  Post,
  Headers,
  Body,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { userData } from 'src/interface/userData';
import { taskData } from 'src/interface/taskData';

@Controller('user')
export class UserController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getUsers(@Headers('Authorization') token: string): Promise<any> {
    const decodedToken = await this.databaseService
      .decodeJWT(token)
      .then((res) => {
        if (res.status !== false) {
          return res;
        } else {
          return { status: false, error: res, errorMessage: res.message };
        }
      })
      .catch((err) => {
        console.error('err');
      });
    return decodedToken;
  }

  @Post('create_task')
  async createTasks(@Body() taskData: taskData): Promise<any> {
    // console.log(taskData);

    const result = await this.databaseService.create_task(taskData);
    return result;
  }

  @Get('get_tasks')
  async getTasks(@Query() userData: userData): Promise<any> {
    const result = await this.databaseService.getTasks(userData.id);
    return result;
  }

  @Delete('delete_task')
  async deleteTask(@Query() task: number): Promise<any> {
    const result = await this.databaseService.deleteTask(task['id']);
    return 'ok';
  }
}
