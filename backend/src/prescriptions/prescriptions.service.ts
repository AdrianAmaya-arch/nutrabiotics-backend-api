import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreatePrescriptionDto } from './dto/create-prescription.dto';

@Injectable()
export class PrescriptionsService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async create(
    dto: CreatePrescriptionDto,
    doctorId: string,
  ) {
    return this.prisma.prescription.create({
      data: {
        medicationName: dto.medicationName,

        dosage: dto.dosage,

        frequency: dto.frequency,

        notes: dto.notes,

        patientId: dto.patientId,

        doctorId,
      },
    });
  }

  async findAll() {
    return this.prisma.prescription.findMany({
      include: {
        doctor: true,

        patient: true,
      },
    });
  }

  async consume(
    prescriptionId: string,
  ) {
    return this.prisma.prescription.update({
      where: {
        id: prescriptionId,
      },

      data: {
        status: 'consumed',

        consumedAt: new Date(),
      },
    });
  }

  async getMetrics() {
    const total =
      await this.prisma.prescription.count();

    const active =
      await this.prisma.prescription.count({
        where: {
          status: 'active',
        },
      });

    const consumed =
      await this.prisma.prescription.count({
        where: {
          status: 'consumed',
        },
      });

    const expired =
      await this.prisma.prescription.count({
        where: {
          status: 'expired',
        },
      });

    return {
      total,

      active,

      consumed,

      expired,
    };
  }
}