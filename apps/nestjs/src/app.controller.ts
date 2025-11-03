import { User } from '@repo/types';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/type')
  typeTest(): string {
    const user: User = { id: 1, name: 'John Doe' };
    return `User: ${user.name}`;
  }
}
