import { Module } from '@nestjs/common';
import { UserModule,UploadModule } from './modules';
import { envConfigCreator,cacheManagerCreator } from './utils';



@Module({
  imports: [UserModule,UploadModule,envConfigCreator(),cacheManagerCreator()]
})
export class AppModule {}
