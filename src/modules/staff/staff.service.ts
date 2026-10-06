import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';
import { CreateStaffDto } from './dto/create-staff.dto.js';

@Injectable()
export class StaffService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(createStaffDto: CreateStaffDto) {
    return this.prisma.staffProfile.create({
      data: {
        employeeCode: createStaffDto.employeeCode,

        firstName: createStaffDto.firstName,
        lastName: createStaffDto.lastName,

        email: createStaffDto.email,
        phone: createStaffDto.phone,

        role: createStaffDto.role,

        specialization: createStaffDto.specialization,
        licenseNumber: createStaffDto.licenseNumber,

        dateOfBirth: createStaffDto.dateOfBirth
          ? new Date(createStaffDto.dateOfBirth)
          : undefined,

        joiningDate: new Date(createStaffDto.joiningDate),

        address: createStaffDto.address,
      },
    });
  }

  async findAll() {
    return this.prisma.staffProfile.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.staffProfile.findUnique({
      where: {
        id,
      },
    });
  }
}