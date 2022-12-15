import * as cors from 'cors'
import { NestExpressApplication } from '@nestjs/platform-express'


/**
 * 启用session
 * @param app 实例
 */
export function corsSetup(app:NestExpressApplication) {
  app.use(cors())
}
