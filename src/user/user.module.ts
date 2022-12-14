import { MiddlewareConsumer, Module,NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from 'src/logger.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log(consumer,'UserModule-configure')
    // consumer.apply(LoggerMiddleware).forRoutes('user')
    // consumer.apply(LoggerMiddleware).forRoutes({path:'user',method:RequestMethod.GET})
    // consumer.apply(LoggerMiddleware).forRoutes(UserController)
  }
}
