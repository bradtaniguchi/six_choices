import {
  Injectable,
  ConflictException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './user';
import { shallowCompare } from 'utils/shallow-compare';
import { ClientUser } from './client-user';
import { AuthService } from 'auth/auth.service';
import { JwtToken } from 'auth/jwt-token';
import * as bcrypt from 'bcrypt';

const CREATE_ALREADY_EXISTS = 'User already exists';
const CREATE_BAD_REQUEST = 'Invalid request';
const LOGIN_INVALID = 'Invalid credentials';
@Injectable()
export class UserService {
  constructor(private readonly authService: AuthService) {}
  private readonly users: User[] = [
    {
      name: 'brad',
      email: 'brad@mail.com',
      password: 'pass', // this will be changed later
    },
  ];

  /**
   * Creates a new user with the give email and name, if the user's email provided
   * already is registered we return an error
   * @param email the email of the user, acts as primary key
   * @param name the name of the user
   * @param password the password to add for the user
   */
  async create(
    email: string,
    name: string,
    password: string,
  ): Promise<ClientUser> {
    if (email && name) {
      const existingUser = this.users.find(_user => _user.email === email);
      if (existingUser) {
        return Promise.reject(new ConflictException(CREATE_ALREADY_EXISTS));
      }
      const hashedPassword = await this.hashPassword(password);
      const clientUser: ClientUser = {
        name,
        email,
      };
      const databaseUser: User = {
        name,
        email,
        password: hashedPassword,
      };
      this.users.push(databaseUser);
      return Promise.resolve(clientUser);
    }
    return Promise.reject(new BadRequestException(CREATE_BAD_REQUEST));
  }

  /**
   * Logs a user in
   * @param user the user we will check their credientials for
   */
  async login(user: User): Promise<JwtToken> {
    const existingUserByEmail = this.users.find(
      dbUser => dbUser.email === user.email,
    );
    if (!existingUserByEmail) {
      return Promise.reject(new UnauthorizedException(LOGIN_INVALID));
    }
    const validPass = await this.comparePassword(
      user.password,
      existingUserByEmail.password,
    );
    if (!validPass) {
      return Promise.reject(new UnauthorizedException(LOGIN_INVALID));
    }
    const token = this.authService.createToken(user);
    return Promise.resolve(token);
  }
  private hashPassword(password: string): Promise<any> {
    return bcrypt.has(password, 10);
  }
  private comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
