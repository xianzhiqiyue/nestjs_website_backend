import { ConfigModule,ConfigModuleOptions } from '@nestjs/config';
import { envConfig } from '../config'

export const envConfigCreator = (options?:ConfigModuleOptions) => ConfigModule.forRoot({...(options || {}),...envConfig})