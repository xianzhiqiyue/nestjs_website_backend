export const sessionConfig = {
  maxAge:36 * 60 * 60 * 1000, //最大有效时长，单位ms
  secret:'yue', //加密密钥
  rolling:true, //连接重置有效时间
}