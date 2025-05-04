import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform:true
      }),
  );

    const config = new DocumentBuilder()
        .setTitle('DDD API')
        .setDescription('The DDD API description')
        .setVersion('1.0')
        .addTag('posts') // Добавление тега для постов
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            docExpansion: 'none',
            defaultModelsExpandDepth: -1,
            displayRequestDuration: true,
            filter: true,
        },
    });


  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
