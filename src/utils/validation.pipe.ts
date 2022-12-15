import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * 启用nestjs数据验证
 * @param app 实例
 */
export function validationSetup(app:NestExpressApplication) {
  app.useGlobalPipes(new ValidationPipe())
}