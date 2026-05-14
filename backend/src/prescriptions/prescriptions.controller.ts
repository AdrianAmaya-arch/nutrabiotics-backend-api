import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { PrescriptionsService } from './prescriptions.service';

import { CreatePrescriptionDto } from './dto/create-prescription.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { RolesGuard } from '../auth/guards/roles.guard';

import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Prescriptions')
@ApiBearerAuth()
@Controller('prescriptions')
export class PrescriptionsController {
  constructor(
    private prescriptionsService: PrescriptionsService,
  ) {}

  @ApiOperation({
    summary:
      'Get prescriptions metrics',
  })
  @UseGuards(JwtAuthGuard)
  @Get('metrics')
  async getMetrics() {
    return this.prescriptionsService.getMetrics();
  }

  @ApiOperation({
    summary:
      'Create a prescription',
  })
  @UseGuards(
    JwtAuthGuard,
    RolesGuard,
  )
  @Roles('doctor', 'admin')
  @Post()
  async create(
    @Body()
    dto: CreatePrescriptionDto,

    @Request()
    req: any,
  ) {
    return this.prescriptionsService.create(
      dto,
      req.user.sub,
    );
  }

  @ApiOperation({
    summary:
      'Get all prescriptions',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.prescriptionsService.findAll();
  }

  @ApiOperation({
    summary:
      'Consume a prescription',
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id/consume')
  async consume(
    @Param('id') id: string,
  ) {
    return this.prescriptionsService.consume(id);
  }
}