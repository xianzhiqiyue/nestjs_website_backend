import { VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * 打开版本控制
 * @param app 实例
 */
export function enableVersioning (app:NestExpressApplication) {
  app.enableVersioning({ //版本控制
    type: VersioningType.URI
  })
}