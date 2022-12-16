import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { swaggerSetup, enableVersioning, sessionSetup, typeOrmSetup, port, loggerSetup, whitelistSetup, validationSetup, staticAssetsSetup, corsSetup,roleGuardGlobalSetup,authGuardGlobalSetup } from './utils'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  enableVersioning(app) 
  sessionSetup(app)
  swaggerSetup(app)
  loggerSetup(app)
  whitelistSetup(app)
  validationSetup(app)
  staticAssetsSetup(app)
  corsSetup(app)
  // roleGuardGlobalSetup(app)
  authGuardGlobalSetup(app)

  await typeOrmSetup()

  await app.listen(port);

  console.info(`server running on ${await app.getUrl()}`);
}

bootstrap();
