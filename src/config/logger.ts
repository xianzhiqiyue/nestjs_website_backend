import { LogLevel } from '@nestjs/common';

//log , error , warn , debug 和 verbose
const logConfig: LogLevel[] = ['error', 'warn']
const logConfigDev: LogLevel[] = ['log', 'error', 'warn']

export const getLogConfig = (isDev: boolean): LogLevel[] => isDev ? logConfigDev : logConfig