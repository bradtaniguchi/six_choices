import { Get, Controller, Post, Body, Headers } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { LoggerService } from './logger/logger.service';
import { User } from './user/user';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly loggerService: LoggerService,
  ) {}

  @Get('test')
  root(): string {
    this.loggerService.log('hello world!');
    return 'EMPTY ROOT PAGE, check logs'; // TODO: remove later
  }
  /**
   * Registers the given user. Returns a valid JwtToken
   * @param user the user trying to register
   * @param headers the passed headers, we will check if the user
   * is already logged in
   */
  @Post('register')
  async register(@Body() user: User, @Headers() headers: string) {
    const registerdUser = await this.userService.create(
      user.email,
      user.name,
      user.password,
    );
    const token = await this.authService.createToken(registerdUser);
    return token;
  }
  /**
   * Logins the gien user, returns a valid JwtToken if valid
   * @param user the user trying to login
   * @param headers the passed headers, we will check if the user
   * is already logged in
   */
  @Post('login')
  async login(@Body() user: User, @Headers() headers: string) {
    const token = await this.userService.login(user);
    return token;
  }
}
