import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length,IsNumber } from 'class-validator'


export class CreateUserDto {
  @ApiProperty({
    description: `用户名`,
    maxLength:20,
    example: '爱尔奎特',
  })
  @IsNotEmpty({message:'姓名不能为空'})
  @IsString({message:'必须是string类型'})
  @Length(1,20,{message:'长度不能超过20字节'})
  username: string;

  @ApiProperty({
    description: `密码，允许字母、数字和符号的组合`,
    maxLength:20,
    example: 'password#date_21321',
  })
  password: string;

  @ApiProperty({
    description: `电话号码`,
    maxLength:20,
    example: '0551-69862554',
  })
  phone: string

  @ApiProperty({
    description: `电子邮件`,
    maxLength:50,
    example: 'zhh@ciqtek.com',
  })
  email?: string

  @ApiProperty({
    description: `权限,0:admin | 1:normal`,
    example: '0',
  })
  role: number;
}
