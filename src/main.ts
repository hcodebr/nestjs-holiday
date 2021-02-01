import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //2º - vai criar um módulo padrão,com base na Classe AppModule que é a nossa aplicação.
//ele vai utilizar o objeto NestFactory para criar uma instância de uma aplicação
  const app = await NestFactory.create(AppModule);
//3º - Internamente o Nest vai utilizar um framework HTTP para subir as requisições e respostas, 
//por padrão utiliza o Express e abstrai o Express para dentro do NestJS
  await app.listen(3000);
}
//1º - método bootstrap é executado
bootstrap();
