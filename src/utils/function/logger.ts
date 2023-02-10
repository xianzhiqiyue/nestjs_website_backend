import { NestExpressApplication } from '@nestjs/platform-express'
import { getLogConfig } from '@/config'

/**
 * 启用session
 * @param app 实例
 */
export function loggerSetup(app: NestExpressApplication, isDev: boolean) {
  app.useLogger(getLogConfig(isDev))
}