import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new NotFoundException(`User not found for email: ${email}`);
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid password');
    }

    // const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
