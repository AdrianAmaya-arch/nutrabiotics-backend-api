import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { LoginDto } from './dto/login.dto';

import { JwtAuthGuard } from './guards/jwt-auth.guard';

import { Roles } from './decorators/roles.decorator';

import { RolesGuard } from './guards/roles.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @ApiOperation({
    summary: 'User login',
  })
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
  ) {
    return this.authService.login(
      loginDto.email,
      loginDto.password,
    );
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Get authenticated user profile',
  })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Admin protected endpoint',
  })
  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )
  @Roles('admin')
  @Get('admin')
  getAdminData() {
    return {
      message:
        'Bienvenido administrador',
    };
  }
}