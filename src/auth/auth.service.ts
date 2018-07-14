import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { User } from 'user/user';
import { JwtToken } from './jwt-token';
import { ClientUser } from 'user/client-user';

@Injectable()
export class AuthService {
  private readonly SECRET = 'super-secret'; // change to environment variable
  constructor() {}

  async createToken(user: User): Promise<JwtToken> {
    // const user: User = await this.usersService.create('test', 'test@mail.com');
    const expiresIn = 3600;
    const clientUser = this.getClientUser(user);
    const token = jwt.sign(clientUser, this.SECRET, { expiresIn });
    return {
      expiresIn,
      token,
    };
  }
  /**
   * Parses the token, and returns its contents. If it isn't valid
   * we return an error
   * @param token the token we will parse
   */
  async validateToken<T>(token: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      jwt.verify(token, this.SECRET, (err, decoded) => {
        err ? reject(err) : resolve(decoded);
      });
    });
  }
  private getClientUser(user: User): ClientUser {
    return {
      name: user.name,
      email: user.email,
    };
  }
}
