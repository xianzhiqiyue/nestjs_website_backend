import { ArgumentMetadata, Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';
import {plainToInstance} from 'class-transformer'
import {validate} from 'class-validator'

@Injectable()
export class UserPipe implements PipeTransform {
 async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value,metadata,'userPipe')
    const DTO = plainToInstance(metadata.metatype,value)
    const errorList = await validate(DTO)
    console.log(DTO,errorList,'userPipe-DTO')
    if(errorList.length) {
      throw new HttpException(errorList,HttpStatus.BAD_REQUEST)
    }
    return value;
  }
}
