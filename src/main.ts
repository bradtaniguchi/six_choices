import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

if (fs.existsSync('.env')) {
  require('dotenv').config();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(__dirname + '/../dist');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
