import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // Criando o aplicativo Nest com suporte a Express
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Habilitar CORS
  app.enableCors();

  // Configurar validação global
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  // Servir arquivos estáticos da pasta "frontend"
  app.useStaticAssets(join(__dirname, '..', 'frontend'));

  // Definir a porta para o servidor
  await app.listen(3000);
}
bootstrap();
