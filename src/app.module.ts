import { Module } from '@nestjs/common';
import { UserModule,UploadModule,AuthModule } from './modules';
import { envConfigCreator,cacheManagerCreator } from './utils';


@Module({
  imports: [UserModule,UploadModule,AuthModule,envConfigCreator(),cacheManagerCreator()]
})
export class AppModule {}
