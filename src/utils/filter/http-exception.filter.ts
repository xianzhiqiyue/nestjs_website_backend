import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common'
import { QueryFailedError } from 'typeorm'
import { CODE } from '..'
import { genErrorMsg } from '../utils/util'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    Logger.error(exception, 'error')
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.BAD_REQUEST
    const params = request.method.toLocaleLowerCase() === 'post' ? request.body : request.params
    const { code, message, errorMsg } = this.allocErrorMsg(exception)
    const errorResponse = {
      message,
      code, // 自定义code
      params, //自定义参数
      path: request.url, // 错误的url地址
      method: request.method, // 请求方式
      errorMsg, //错误内容
      timestamp: new Date().toISOString() // 错误的时间
    }
    // 设置返回的状态码、请求头、发送错误信息
    response.status(status)
    response.header('Content-Type', 'application/json; charset=utf-8')
    response.send(errorResponse)
  }
  /** 分配错误信息 */
  private allocErrorMsg(exception: HttpException) {
    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : { code: CODE.PARAM_ERROR }
    if (exception instanceof QueryFailedError) {
      /** 格式化数据库字段名 */
      return { code: CODE.SAME_VALUE, message: exception.message }
    }
    if (Object.prototype.toString.call(exceptionResponse) === '[object Object]') {
      const { code, message = exception.message, errorMsg } = exceptionResponse as Record<string, any>
      return {
        code,
        message,
        errorMsg
      }
    } else {
      return genErrorMsg(CODE.PARAM_ERROR)
    }
  }
}
