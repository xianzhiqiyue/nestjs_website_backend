import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { swaggerConfig, port } from '@/config'


/**
 * 启动api 接口文档
 * apiFox 导入地址为 /URL + '-json'
 * @param app 
 */
export function swaggerSetup(app: INestApplication) {
  const { title, description, version, URL, persistAuthorization } = swaggerConfig

  const options = new DocumentBuilder().setTitle(title).setDescription(description).setVersion(version).addBearerAuth().build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup(URL, app, document, {
    swaggerOptions: {
      persistAuthorization,
    }
  })
  return URL
}
