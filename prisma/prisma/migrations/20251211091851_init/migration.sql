/*
  Warnings:

  - You are about to drop the `staff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "attendance" DROP CONSTRAINT "fk_attendance_employee";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "fk_employees_role";

-- DropForeignKey
ALTER TABLE "staff" DROP CONSTRAINT "staff_deptid_fkey";

-- DropTable
DROP TABLE "staff";

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "sal" INTEGER,
    "email" VARCHAR(150),
    "deptid" INTEGER,
    "roleid" INTEGER,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "fk_employees_role" FOREIGN KEY ("roleid") REFERENCES "roles"("roleid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "staff_deptid_fkey" FOREIGN KEY ("deptid") REFERENCES "departments"("deptid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "fk_attendance_employee" FOREIGN KEY ("empid") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
