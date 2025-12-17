/*
  Warnings:

  - A unique constraint covering the columns `[microsoftId]` on the table `emp` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "emp" ADD COLUMN     "authProvider" TEXT DEFAULT 'LOCAL',
ADD COLUMN     "microsoftId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "emp_microsoftId_key" ON "emp"("microsoftId");
