import { DataSource } from "typeorm"
import { getTypeormConfig } from "@/config"

/**
 * 启用数据库
 */
export async function typeOrmSetup(isDev: boolean) {
  const AppDataSource = new DataSource(getTypeormConfig(isDev))
  try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")
  } catch (error) {
    console.error("Error during Data Source initialization", error)
  }
}