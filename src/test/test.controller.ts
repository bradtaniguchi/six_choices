import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('test')
export class TestController {
  @Get()
  @UseGuards(AuthGuard('bearer'))
  test() {
    console.log('test in controller');
    return {
      message: 'this is a test message',
    };
  }
}
