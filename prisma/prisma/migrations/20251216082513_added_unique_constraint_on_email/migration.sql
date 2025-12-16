/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `emp` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "emp_email_key" ON "emp"("email");
