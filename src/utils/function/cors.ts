import { NestExpressApplication } from '@nestjs/platform-express'


/**
 * 启用session
 * @param app 实例
 */
export function enableCors(app: NestExpressApplication) {
  app.enableCors()
}
