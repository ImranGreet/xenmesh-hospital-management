import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { CreateStaffDto } from './dto/create-staff.dto.js';
import { StaffService } from './staff.service.js';

@Controller('staff')
export class StaffController {
  constructor(
    private readonly staffService: StaffService,
  ) {}

  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }
}