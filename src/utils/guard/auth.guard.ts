import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request:Request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest (request:Request):boolean {
  // console.log(request,'AuthGuard')
  return true
}

/**
 * 全局使用权限守卫
 * @param app 
 */
export function authGuardGlobalSetup(app:NestExpressApplication) {
  app.useGlobalGuards(new AuthGuard())
}

// example-使用守卫装饰器，设置控制范围，可以通过逗号分隔多个守卫
// @Controller('cats')
// @UseGuards(RolesGuard)
// export class CatsController {}