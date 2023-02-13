import { Module } from '@nestjs/common';
import { UserModule,UploadModule,AuthModule,CatsModule } from './modules';
import { envConfigCreator,cacheManagerCreator } from './utils';


@Module({
  imports: [UserModule,UploadModule,AuthModule,envConfigCreator(),cacheManagerCreator(), CatsModule]
})
export class AppModule {}
