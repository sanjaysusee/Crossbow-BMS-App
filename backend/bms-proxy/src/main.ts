import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend
  app.enableCors({
    origin: true,
    credentials: true,
  });
  
  await app.listen(4000);
  console.log('BMS Proxy Service is running on port 4000');
}
bootstrap();
