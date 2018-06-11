import { Controller, Post, Body, Headers } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';
import { AuthService } from 'auth/auth.service';

@Controller('users')
export class UserController {
  constructor() {}
}
