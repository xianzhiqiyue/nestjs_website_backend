import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user && user.password === pass && user.isActive) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}