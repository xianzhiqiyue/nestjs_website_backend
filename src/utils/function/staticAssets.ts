import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { staticAssetsConfig } from '@/config'

/**
 * 打开版本控制
 * @param app 实例
 */
export function staticAssetsSetup(app: NestExpressApplication) {
  const { prefix, directory } = staticAssetsConfig
  app.useStaticAssets(join(__dirname, directory), { prefix })
}