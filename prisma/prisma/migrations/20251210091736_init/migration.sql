-- CreateTable
CREATE TABLE "staff" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "sal" INTEGER,
    "email" VARCHAR(150),
    "deptid" INTEGER,
    "roleid" INTEGER,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "deptid" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "departments_pkey" PRIMARY KEY ("deptid")
);

-- CreateTable
CREATE TABLE "attendance" (
    "attendanceid" SERIAL NOT NULL,
    "empid" INTEGER NOT NULL,
    "attendancedate" DATE NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("attendanceid")
);

-- CreateTable
CREATE TABLE "roles" (
    "roleid" SERIAL NOT NULL,
    "rolename" VARCHAR(100) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("roleid")
);

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_deptid_fkey" FOREIGN KEY ("deptid") REFERENCES "departments"("deptid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "fk_employees_role" FOREIGN KEY ("roleid") REFERENCES "roles"("roleid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "fk_attendance_employee" FOREIGN KEY ("empid") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
