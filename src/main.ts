import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger } from '@nestjs/common';

const logger = new Logger('GATEWAY');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.port);
  logger.log(`app running on port ${envs.port}`);
}
bootstrap();
