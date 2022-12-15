import { LogLevel } from '@nestjs/common';
import {DataSourceOptions} from 'typeorm'

export const port = 3000;

export const sessionConfig = {
  maxAge:36 * 60 * 60 * 1000, //最大有效时长，单位ms
  secret:'yue', //加密密钥
  rolling:true, //连接重置有效时间
}

export const typeormConfig:DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "nestjs_site_backend",
  // entities: [], //要加载并用于此数据源的实体或实体架构。 例：entities: [Post, Category, "entity/*.js", "modules/**/entity/*.js"]
  // subscribers: [], //要加载并用于此数据源的订阅服务器。 例：subscribers: [PostSubscriber, AppSubscriber, "subscriber/*.js", "modules/**/subscriber/*.js"]
  // logging: false, //指示是否启用日志记录。
  // cache: false, //启用缓存
  // maxQueryExecutionTime:3000, // 如果查询执行时间超过此给定的最大执行时间（以毫秒为单位） 然后记录器将记录此查询。
  // poolSize:10, // 配置最大活动连接数为池。
}


export const swaggerConfig = {
  TITLE:'后端Swagger',
  DESCRIPTION:'Nestjs搭建的Node后端程序',
  VERSION: '1',
  URL:'/api-docs',
}

export const logConfig:LogLevel[] =  ['log', 'error', 'warn'] //log , error , warn , debug 和 verbose

export const whitelistConfig:string[] = []

export const staticAssetsConfig = {
  prefix:'/file',
  directory:'images'
}