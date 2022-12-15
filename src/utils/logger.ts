import { NestExpressApplication } from '@nestjs/platform-express'
import { logConfig } from '../config'

/**
 * 启用session
 * @param app 实例
 */
export function loggerSetup(app:NestExpressApplication) {
  app.useLogger(logConfig)
}