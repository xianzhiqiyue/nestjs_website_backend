import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { swaggerSetup, enableVersioning, sessionSetup, typeOrmSetup, loggerSetup, whitelistSetup, validationSetup, staticAssetsSetup, roleGuardGlobalSetup, authGuardGlobalSetup, setGlobalPrefix, enableCors, getEnv, envInfoPrint, serverSetup, useGlobalHttpExceptionFilter } from '@/utils'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const isDev = getEnv()
  enableVersioning(app)
  const docURL = swaggerSetup(app)
  sessionSetup(app)
  setGlobalPrefix(app)
  loggerSetup(app, isDev)
  whitelistSetup(app)
  validationSetup(app)
  staticAssetsSetup(app)
  enableCors(app)
  authGuardGlobalSetup(app)
  // roleGuardGlobalSetup(app)

  await typeOrmSetup(isDev)

  useGlobalHttpExceptionFilter(app)
  await serverSetup(app)

  envInfoPrint(app, { isDev, docURL })
}

bootstrap();
