import { NestExpressApplication } from '@nestjs/platform-express'
import * as session from 'express-session'
import { sessionConfig } from '@/config'

/**
 * 启用session
 * @param app 实例
 */
export function sessionSetup(app: NestExpressApplication) {
  const { maxAge, secret, rolling } = sessionConfig
  app.use(session({ secret, rolling, resave: false, saveUninitialized:false, cookie: { maxAge } }))
}