import { DataSource } from "typeorm"
import { typeormConfig } from "../config"

/**
 * 启用数据库
 */
export async function typeOrmSetup() {
  const AppDataSource = new DataSource(typeormConfig)
  try {
    await AppDataSource.initialize()
    console.log("Data Source has been initialized!")
  } catch (error) {
    console.error("Error during Data Source initialization", error)
  }
}