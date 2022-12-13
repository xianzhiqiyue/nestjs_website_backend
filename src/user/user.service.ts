import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return {
      code:200
    };
  }

  findOne(id: number) {
    return {
      id,
      code:200
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  createCode(): svgCaptcha.CaptchaObj {
    return svgCaptcha.create({
      size:4,
      fontSize:50,
      width:100,
      height:35,
      background:'#cc9966'
    })
  }
}
