import { Injectable } from '@nestjs/common';
import { Role } from 'src/utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'john',
        password: 'changeme',
        role: Role.Admin,
        isActive: true,
      },
      {
        id: 2,
        username: 'chris',
        password: 'secret',
        role: Role.Admin,
        isActive: true,
      },
      {
        id: 3,
        username: 'maria',
        password: 'guess',
        role: Role.Admin,
        isActive: true,
      },
    ];
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(name: string):User {
    return this.users.find(({username})=> username === name);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
