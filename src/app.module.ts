import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [AuthModule, UserModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
