-- CreateTable
CREATE TABLE `staff_profiles` (
    `id` VARCHAR(191) NOT NULL,
    `employeeCode` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `role` ENUM('DOCTOR', 'NURSE', 'PHARMACIST', 'RECEPTIONIST', 'LAB_TECHNICIAN', 'ADMINISTRATOR') NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NOT NULL DEFAULT 'ACTIVE',
    `departmentId` VARCHAR(191) NULL,
    `specialization` VARCHAR(191) NULL,
    `licenseNumber` VARCHAR(191) NULL,
    `dateOfBirth` DATETIME(3) NULL,
    `joiningDate` DATETIME(3) NOT NULL,
    `address` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `staff_profiles_employeeCode_key`(`employeeCode`),
    UNIQUE INDEX `staff_profiles_email_key`(`email`),
    UNIQUE INDEX `staff_profiles_licenseNumber_key`(`licenseNumber`),
    INDEX `staff_profiles_role_idx`(`role`),
    INDEX `staff_profiles_status_idx`(`status`),
    INDEX `staff_profiles_departmentId_idx`(`departmentId`),
    INDEX `staff_profiles_lastName_idx`(`lastName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
