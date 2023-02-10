import { CacheModule, CacheModuleOptions } from '@nestjs/common';

export const cacheManagerCreator = (options?:CacheModuleOptions) => CacheModule.register(options)