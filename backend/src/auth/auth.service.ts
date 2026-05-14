import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,

    private prisma: PrismaService,
  ) {}

  async login(
    email: string,
    password: string,
  ) {
    const user =
      await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (!user) {
      throw new UnauthorizedException(
        'Usuario no encontrado',
      );
    }

    const passwordMatch =
      password === user.password;

    if (!passwordMatch) {
      throw new UnauthorizedException(
        'Contraseña incorrecta',
      );
    }

    const payload = {
      sub: user.id,

      email: user.email,

      role: user.role,
    };

    const accessToken =
      this.jwtService.sign(payload);

    return {
      accessToken,

      user: {
        id: user.id,

        email: user.email,

        role: user.role,

        name: user.name,
      },
    };
  }
}