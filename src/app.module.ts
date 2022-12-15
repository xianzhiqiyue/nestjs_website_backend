import { Module } from '@nestjs/common';
import { UserModule,UploadModule } from './modules';

@Module({
  imports: [UserModule,UploadModule]
})
export class AppModule {}
