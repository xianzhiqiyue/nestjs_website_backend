import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { User } from 'src/modules/user/entities/user.entity';
import { ROLES_KEY,Role } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user }:{user:User} = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
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