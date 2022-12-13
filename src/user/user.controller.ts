import { Controller, Get, Post, Body, Patch, Param, Delete, Req,Res, Request,Response, HttpCode,Session } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'

@Controller({
  path:'user',
  version: '1'
})
@ApiBearerAuth()
@ApiTags('用户模块')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: '新增用户'})
  @HttpCode(204)
  create(@Body() createUserDto: CreateUserDto,@Session() session) {
    console.log(session,createUserDto,'session')
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({summary: '获取所有用户'})
  findAll(@Req() req: Request) {
    console.log(req,'Request')
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: '根据ID查找用户',description: '根据ID查找用户'})
  @ApiParam({name:'id',description:'用户ID',required:true})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: '修改用户'})
  @ApiQuery({name:'id',description:'用户ID',required:true,type: Number})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary: '删除用户'})
  @ApiResponse({status:403,description:'403，拒绝访问'})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get()
  @ApiOperation({summary: '创建验证码'})
  createCode(@Req() req:Request, @Res() res, @Session() session) {
    console.log(req,'Request')
    const {text,data} = this.userService.createCode();
    session.code = text
    res.type('image/svg+xml')
    res.send(data)
  }
}
