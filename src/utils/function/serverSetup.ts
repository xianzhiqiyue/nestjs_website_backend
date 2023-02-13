import { NestExpressApplication } from '@nestjs/platform-express'
import { port } from '@/config'

/**
 * 启用session
 * @param app 实例
 */
export async function serverSetup(app: NestExpressApplication) {
  await app.listen(port)
}