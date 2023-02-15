import { Injectable, NestInterceptor, ExecutionContext, CallHandler, INestApplication } from '@nestjs/common';
import { Request } from 'express'
import { map, Observable } from 'rxjs'

@Injectable()
export class BlacklistInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>()
    return next.handle().pipe(
      map((data) => {
        return {
          result: data || {},
          code: 200,
          message: '请求成功'
        }
      })
    )
  }
}

export const globalBlacklistSetup = (app: INestApplication) => {
  app.useGlobalInterceptors(new BlacklistInterceptor())
}
