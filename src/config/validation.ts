import { ValidationPipeOptions } from "@nestjs/common";

export const validationConfig:ValidationPipeOptions = {
  whitelist:true,
  transform:true,
  disableErrorMessages:false,
}