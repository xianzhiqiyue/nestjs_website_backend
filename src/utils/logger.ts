import { NestExpressApplication } from '@nestjs/platform-express'
import { logConfig } from './baseConfig'

/**
 * 启用session
 * @param app 实例
 */
export function loggerSetup(app:NestExpressApplication) {
  app.useLogger(logConfig)
}