import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const TITLE = '后端Swagger'
const DESCRIPTION = 'Nestjs搭建的Node后端程序'
const VERSION = '1'
const URL = '/api-docs'

/**
 * 启动api 接口文档
 * apiFox 导入地址为 /URL + '-json'
 * @param app 
 */
 export function swaggerSetup(app:INestApplication) {
  const options = new DocumentBuilder().setTitle(TITLE).setDescription(DESCRIPTION).setVersion(VERSION).build()

  const document = SwaggerModule.createDocument(app,options)

  SwaggerModule.setup(URL,app,document)
}
