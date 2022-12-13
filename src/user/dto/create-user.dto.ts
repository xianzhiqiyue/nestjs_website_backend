import { ApiProperty } from '@nestjs/swagger'
export class CreateUserDto {
  @ApiProperty({name:'姓名',example:'夏知雨',required:true})
  name:string
  @ApiProperty({name:'电话'})
  phone:number
  @ApiProperty({name:'年龄'})
  age:number
  @ApiProperty({name:'密码',description:'8位以上16位以内数字、字母及下划线组合',required:false})
  password:string
}
