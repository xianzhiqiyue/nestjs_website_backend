import { NestExpressApplication } from "@nestjs/platform-express"

export function envInfoPrint(app: NestExpressApplication, { docURL, isDev }: { docURL: string, isDev: boolean }) {
  app.getUrl().then(rootUrl => {
    console.info(`server running on ${rootUrl}`)
    console.info(`Documentation: ${rootUrl}${docURL}`,)
    console.info(`当前处于${isDev ? '开发' : '正式'}环境`)
  })
}
