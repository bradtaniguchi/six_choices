import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
@Injectable()
export class LoggerService {
  private logger: winston.LoggerInstance;
  constructor() {
    this.logger = new winston.Logger({
      transports: [
        new winston.transports.Console({
          timestamp: () => new Date().toDateString(),
        }),
      ],
    });
  }

  log(message: string): void {
    this.logger.info(message);
  }
  error(message: string): void {
    this.logger.error(message);
  }
  warn(message: string): void {
    this.logger.warn(message);
  }
}
