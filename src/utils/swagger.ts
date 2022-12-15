import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import {swaggerConfig} from './baseConfig'


/**
 * 启动api 接口文档
 * apiFox 导入地址为 /URL + '-json'
 * @param app 
 */
 export function swaggerSetup(app:INestApplication) {
  const {TITLE,DESCRIPTION,VERSION,URL} = swaggerConfig
  
  const options = new DocumentBuilder().setTitle(TITLE).setDescription(DESCRIPTION).setVersion(VERSION).build()

  const document = SwaggerModule.createDocument(app,options)

  SwaggerModule.setup(URL,app,document)
}
