import { CallHandler, ExecutionContext, HttpStatus, Logger, NestInterceptor } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { CODE } from '../enums/code.enum'

export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const response = context.switchToHttp().getResponse()
    response.statusCode = HttpStatus.OK
    return next.handle().pipe(
      map((data) => {
        Logger.log(request.url, 'response')
        return {
          result: data || {},
          code: CODE.SUCCESS,
          message: '请求成功'
        }
      })
    )
  }
}
