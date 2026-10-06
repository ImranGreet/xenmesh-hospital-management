import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export enum StaffRole {
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  PHARMACIST = 'PHARMACIST',
  RECEPTIONIST = 'RECEPTIONIST',
  LAB_TECHNICIAN = 'LAB_TECHNICIAN',
  ADMINISTRATOR = 'ADMINISTRATOR',
}

export class CreateStaffDto {
  @IsString()
  @Length(2, 100)
  firstName: string;

  @IsString()
  @Length(2, 100)
  lastName: string;

  @IsString()
  employeeCode: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsPhoneNumber()
  phone: string;

  @IsEnum(StaffRole)
  role: StaffRole;

  @IsOptional()
  @IsString()
  specialization?: string;

  @IsOptional()
  @IsString()
  licenseNumber?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsDateString()
  joiningDate: string;

  @IsOptional()
  @IsString()
  address?: string;
}