import { ArgumentsHost, Catch, ExceptionFilter, HttpAdapterHost, HttpException, HttpStatus, Logger } from '@nestjs/common'
import { Request } from 'express';
import { QueryFailedError } from 'typeorm'
import { CODE } from '@/config'
import { genErrorMsg } from '../util'
import { AbstractHttpAdapter } from '@nestjs/core';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapter: AbstractHttpAdapter) {}
  catch(exception:unknown, host: ArgumentsHost) {
    Logger.error(exception, 'error')
    // const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp()
    // const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const params = request.method.toLocaleLowerCase() === 'post' ? request.body : request.params
    const { code, message, errorMsg } = this.allocErrorMsg(exception)
    const responseBody = {
      message,
      code, // 自定义code
      params, //自定义参数
      path: request.url, // 错误的url地址
      method: request.method, // 请求方式
      errorMsg, //错误内容
      timestamp: new Date().toISOString() // 错误的时间
    }
    // 设置返回的状态码、请求头、发送错误信息
    // response.status(HttpStatus.OK).header('Content-Type', 'application/json; charset=utf-8').send(errorResponse)
    this.httpAdapter.reply(ctx.getResponse(), responseBody, HttpStatus.OK);
  }
  
  /** 分配错误信息 */
  private allocErrorMsg(exception: unknown) {
    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : { code: CODE.PARAM_ERROR }
    if (exception instanceof QueryFailedError) {
      /** 格式化数据库字段名 */
      return { code: CODE.SAME_VALUE, message: exception.message }
    }
    if (Object.prototype.toString.call(exceptionResponse) === '[object Object]') {
      const { code, message, errorMsg } = exceptionResponse as Record<string, any>
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
