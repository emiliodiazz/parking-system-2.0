/*
  Warnings:

  - You are about to drop the column `estacionamiento_Id` on the `Registro` table. All the data in the column will be lost.
  - You are about to drop the `Estacionamiento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Registro` DROP FOREIGN KEY `Registro_estacionamiento_Id_fkey`;

-- AlterTable
ALTER TABLE `Registro` DROP COLUMN `estacionamiento_Id`;

-- DropTable
DROP TABLE `Estacionamiento`;
