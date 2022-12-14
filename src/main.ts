import { NestFactory } from '@nestjs/core';
import { VersioningType,ValidationPipe } from '@nestjs/common';
import * as session from 'express-session'
import { AppModule } from './app.module';
import { swaggerSetup } from './utils/swaggerSetup'
import * as cors from 'cors'
import { Request,Response,NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

function Middleware(req: Request, res: Response, next:NextFunction) {
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableVersioning({ //版本控制
    type: VersioningType.URI
  })

  const maxAge = 36 * 60 * 60 * 1000
  app.use(session({secret:'yue',rolling:true,cookie:{maxAge}}))

  app.use(cors())
  app.use(Middleware)

  app.useGlobalPipes(new ValidationPipe())

  swaggerSetup(app)
  
  app.useStaticAssets(join(__dirname,'images'),{
    prefix:'/file'
  })
  await app.listen(3000);
}


bootstrap();
