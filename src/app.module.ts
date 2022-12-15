import { Module,CacheModule } from '@nestjs/common';
import { UserModule,UploadModule } from './modules';
import { envConfigCreator } from './utils/envConfig';


@Module({
  imports: [UserModule,UploadModule,envConfigCreator(),CacheModule.register()]
})
export class AppModule {}
