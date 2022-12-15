import { NestExpressApplication } from '@nestjs/platform-express';
import { Request,Response,NextFunction } from 'express';
import { whitelistConfig } from './baseConfig'

function whitelistMiddleware(req: Request, res: Response, next:NextFunction) {
  if(whitelistConfig.includes(req.originalUrl)) next();
}
/**
 * 启用白名单
 * @param app 实例
 */
export function whitelistSetup(app:NestExpressApplication) {
  app.use(whitelistMiddleware)
}