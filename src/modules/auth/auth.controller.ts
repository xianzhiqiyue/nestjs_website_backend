import { Controller, Post, UseGuards, Req, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req,@Body() body) {
    console.log(body,'login')
    return req.user;
  }
}