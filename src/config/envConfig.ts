
import { ConfigModuleOptions } from '@nestjs/config';

export const envConfig:ConfigModuleOptions = {
  isGlobal:true, //全局注入
  cache:true, //缓存，直接读环境变量很慢
  expandVariables: true, //可扩展变量
  envFilePath: './config/dev'
}