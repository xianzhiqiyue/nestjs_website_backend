import { DataSourceOptions } from 'typeorm'

export const typeormConfig: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "site_backend_admin",
  password: "SmUJ902@SF_fsF2",
  database: "nestjs_site_backend",
  // entities: [], //要加载并用于此数据源的实体或实体架构。 例：entities: [Post, Category, "entity/*.js", "modules/**/entity/*.js"]
  // subscribers: [], //要加载并用于此数据源的订阅服务器。 例：subscribers: [PostSubscriber, AppSubscriber, "subscriber/*.js", "modules/**/subscriber/*.js"]
  // logging: false, //指示是否启用日志记录。
  // cache: false, //启用缓存
  // maxQueryExecutionTime:3000, // 如果查询执行时间超过此给定的最大执行时间（以毫秒为单位） 然后记录器将记录此查询。
  // poolSize:10, // 配置最大活动连接数为池。
}
export const typeormConfigDev: DataSourceOptions = {
  type: "mysql",
  host: "http://42.193.106.244",
  port: 3306,
  username: "root",
  password: "123456",
  database: "nestjs_site_backend_dev",
}


export const getTypeormConfig = (isDev: boolean) => isDev ? typeormConfigDev : typeormConfig