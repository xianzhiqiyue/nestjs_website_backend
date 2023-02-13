import { HttpException, HttpStatus } from '@nestjs/common'
import { CODE, codeMsg } from '@/config'
import { sign, verify, decode } from 'jsonwebtoken'
import { compare, genSalt, hash } from 'bcryptjs'
import * as crypto from 'crypto'
import * as os from 'os'
/** 生成错误信息 */
export function genErrorMsg(code: CODE, errorMsg?: any) {
  return {
    code,
    message: codeMsg[code],
    errorMsg
  }
}

export function checkAffected(affected: number) {
  if (affected === 0) {
    throw new HttpException(genErrorMsg(CODE.VALUE_NOT_EXITS), HttpStatus.BAD_REQUEST)
  }
  return { affected }
}

/** 检查值是否存在 */
export function checkValIsExits(val: any, message?: string) {
  if (val === undefined || val === null || val === '' || Number.isNaN(val)) {
    throw new HttpException(
      { code: CODE.PARAM_ERROR, message: message || codeMsg[-9999] },
      HttpStatus.BAD_REQUEST
    )
  }
}

/** 生成token */
export function genToken(id: number) {
  const exp = 48
  const key = 'c-zl--fb$'
  return sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * exp,
      data: id
    },
    key
  )
}

/** token 校验 */
export function verifyToken(token: string) {
  const key = 'c-zl--fb$'
  verify(token, key, (err) => {
    if (err) {
      /** token过期 */
      if (err.name === 'TokenExpiredError') {
        throw new HttpException(genErrorMsg(CODE.TOKEN_EXP), HttpStatus.BAD_REQUEST)
      }
      /** token错误 */
      throw new HttpException(genErrorMsg(CODE.TOKEN_ERROR), HttpStatus.BAD_REQUEST)
    }
  })
  return decodeToken(token)
}

/** 获取token中的用户Id */
export function decodeToken(token: string) {
  const d = decode(token)
  if (typeof d === 'string') return d
  return d.data as string
}

/** 密码hash加密 */
export async function hashPwd(data: string) {
  const salt = await genSalt(10)
  return await hash(data, salt)
}

/** 密码hash比较 */
export async function comparePwd(data: string, hash: string) {
  return await compare(data, hash)
}

export function encryptFileMD5(buffer: Buffer) {
  const md5 = crypto.createHash('md5')

  return md5.update(buffer).digest('hex')
}

export function getIPAddress() {
  const interfaces = os.networkInterfaces()
  for (const devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}
