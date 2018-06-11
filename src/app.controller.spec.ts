import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = module.get<AppController>(AppController);
      expect(appController.root()).toBe('Hello World!');
    });
  });
  // describe('register', () => {
  //   it('should call create for userService', () => {}
  // });
});
