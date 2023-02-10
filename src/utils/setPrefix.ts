import { NestExpressApplication } from '@nestjs/platform-express'
import { prefix } from '../config'

/**
 * 设置api全局前缀
 * @param app 实例
 */
export function setGlobalPrefix(app: NestExpressApplication) {
  app.setGlobalPrefix(prefix)
}