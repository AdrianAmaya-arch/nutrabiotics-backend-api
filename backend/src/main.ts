import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';

import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';

import * as express from 'express';

import { AppModule } from './app.module';

import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,

      forbidNonWhitelisted: true,

      transform: true,
    }),
  );

  app.useGlobalFilters(
    new HttpExceptionFilter(),
  );

  const config =
    new DocumentBuilder()
      .setTitle(
        'Nutrabiotics API',
      )

      .setDescription(
        'Technical Test Backend API',
      )

      .setVersion('1.0')

      .addBearerAuth()

      .build();

  const document =
    SwaggerModule.createDocument(
      app,
      config,
    );

  SwaggerModule.setup(
    'api',
    app,
    document,
  );

  app.use(
    '/favicon.ico',
    express.static('favicon.ico'),
  );

  await app.listen(3000);

  console.log(
    'Server running on http://localhost:3000',
  );

  console.log(
    'Swagger docs on http://localhost:3000/api',
  );
}

bootstrap();