import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ServerConfig } from './lib/types/config/server';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const serverConfig = configService.get<ServerConfig>('server');
  const PORT = serverConfig.port;

  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
}
bootstrap();
