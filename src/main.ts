import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import * as session from 'express-session'
import { AppModule } from './app.module';
import { swaggerSetup } from './utils/swaggerSetup'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableVersioning({ //版本控制
    type: VersioningType.URI
  })

  const maxAge = 36 * 60 * 60 * 1000
  app.use(session({secret:'yue',rolling:true,cookie:{maxAge}}))

  swaggerSetup(app)
  
  await app.listen(3000);
}


bootstrap();
