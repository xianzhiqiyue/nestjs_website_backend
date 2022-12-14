import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length,IsNumber } from 'class-validator'
export class CreateUserDto {
  @ApiProperty({name:'姓名',example:'夏知雨',required:true})
  @IsNotEmpty({message:'姓名不能为空'})
  @IsString({message:'必须是string类型'})
  @Length(1,20,{message:'长度不能超过20字节'})
  name:string

  @IsNumber()
  @ApiProperty({name:'电话'})
  phone:number
  @ApiProperty({name:'年龄'})
  age:number
  @ApiProperty({name:'密码',description:'8位以上16位以内数字、字母及下划线组合',required:false})
  password:string
}
