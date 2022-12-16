import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles);
  }
}

function matchRoles (roles,userRoles):boolean {
  // console.log(roles,userRoles,'RoleGuard')
  return true
  //throw new UnauthorizedException();
}

/**
 * 全局使用权限守卫
 * @param app 
 */
export function roleGuardGlobalSetup(app:NestExpressApplication) {
  app.useGlobalGuards(new RolesGuard(new Reflector()))
}

// example-使用守卫装饰器，设置控制范围，可以通过逗号分隔多个守卫
// @Controller('cats')
// @UseGuards(RolesGuard)
// export class CatsController {}