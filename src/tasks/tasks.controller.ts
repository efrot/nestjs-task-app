import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //gets called whenever a get request is made
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  //Get full body with all parameters
  // @Post()
  // createTask(@Body() body) {
  //   return this.taskService.createTask(body.title, body.description);
  // }

  //cherry pick each parameter that is needed in the body
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
