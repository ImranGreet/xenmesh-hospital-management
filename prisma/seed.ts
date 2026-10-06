import 'dotenv/config';

import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../src/generated/prisma/client.js';

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST!,
  port: Number(process.env.DATABASE_PORT ?? 3306),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('Seeding database...');

  await prisma.staffProfile.createMany({
    data: [
      {
        employeeCode: 'DOC-0001',
        firstName: 'Ahmed',
        lastName: 'Rahman',
        email: 'ahmed.rahman@xenmesh.com',
        phone: '+8801700000001',
        role: 'DOCTOR',
        status: 'ACTIVE',
        specialization: 'Cardiology',
        licenseNumber: 'BMDC-10001',
        dateOfBirth: new Date('1982-05-10'),
        joiningDate: new Date('2024-01-15'),
        address: 'Dhaka, Bangladesh',
      },

      {
        employeeCode: 'DOC-0002',
        firstName: 'Nusrat',
        lastName: 'Jahan',
        email: 'nusrat.jahan@xenmesh.com',
        phone: '+8801700000002',
        role: 'DOCTOR',
        status: 'ACTIVE',
        specialization: 'Internal Medicine',
        licenseNumber: 'BMDC-10002',
        dateOfBirth: new Date('1987-09-21'),
        joiningDate: new Date('2024-03-01'),
        address: 'Dhaka, Bangladesh',
      },

      {
        employeeCode: 'NUR-0001',
        firstName: 'Fatema',
        lastName: 'Akter',
        email: 'fatema.akter@xenmesh.com',
        phone: '+8801700000003',
        role: 'NURSE',
        status: 'ACTIVE',
        licenseNumber: 'BNMC-20001',
        dateOfBirth: new Date('1992-02-14'),
        joiningDate: new Date('2025-01-10'),
        address: 'Gazipur, Bangladesh',
      },

      {
        employeeCode: 'PHA-0001',
        firstName: 'Karim',
        lastName: 'Hossain',
        email: 'karim.hossain@xenmesh.com',
        phone: '+8801700000004',
        role: 'PHARMACIST',
        status: 'ACTIVE',
        licenseNumber: 'PHARM-30001',
        dateOfBirth: new Date('1989-11-05'),
        joiningDate: new Date('2025-02-01'),
        address: 'Narayanganj, Bangladesh',
      },

      {
        employeeCode: 'LAB-0001',
        firstName: 'Sabbir',
        lastName: 'Ahmed',
        email: 'sabbir.ahmed@xenmesh.com',
        phone: '+8801700000005',
        role: 'LAB_TECHNICIAN',
        status: 'ACTIVE',
        licenseNumber: 'LAB-40001',
        dateOfBirth: new Date('1990-07-18'),
        joiningDate: new Date('2025-04-15'),
        address: 'Dhaka, Bangladesh',
      },
    ],
    skipDuplicates: true,
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });