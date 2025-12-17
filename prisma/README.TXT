5️⃣ Why do we need employees[] if the FK is in employees?

Great question 👍

Because relations are bi-directional in Prisma

Foreign key lives in employees

But Prisma allows you to navigate both ways

So you can:

From employee → department
employee.department

From department → employees
department.employees


Without the employees[] field:

Prisma would still enforce the FK

But you could not query employees from a department easily

_______________________________________________________________________________________________________________________________________
where: {
  deptid: 2,
  salary: { gt: 50000 }
}
include: {
  department: true,
  roles: true
}
select: {
  id: true,
  name: true,
  email: true
}

6️⃣ data — used in create / update
data: {
  name: "A",
  salary: 50000
}

skip: 20,
take: 10

orderBy: {
  salary: "desc"
}

---------------------------------------
findFirst({
  where: { salary: { gt: 50000 } }
})

updateMany({
  where: { deptid: 2 },
  data: { salary: 60000 }
})

where → WHERE
include → JOIN
data → INSERT / UPDATE
findMany → SELECT *
findUnique → SELECT with PK


--------------------------------------------------
Renaming tables
Renaming column names
Adding same table name, column name and field names and same constraints
Adding tables into multiple schemas
functions, stored procedures, triggers
db migrations--sql server to postgres'












generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "postgresql"
}

model Staff {
  id         Int          @id(map: "staff_pkey") @default(autoincrement())
  name       String?      @db.VarChar(100)
  salary     Int?         @map("sal")
  email      String?      @db.VarChar(150)
  deptid     Int?
  roleid     Int?
  attendance attendance[]
  roles      roles?       @relation(fields: [roleid], references: [roleid], onDelete: NoAction, onUpdate: NoAction, map: "fk_employees_role")
  department departments? @relation(fields: [deptid], references: [deptid], map: "staff_deptid_fkey")

  @@map("employees")
}

model departments {
  deptid      Int     @id @default(autoincrement())
  name        String  @db.VarChar(100)
  description String? @db.VarChar(255)
  employees   Staff[]
}

model attendance {
  attendanceid   Int      @id @default(autoincrement())
  empid          Int
  attendancedate DateTime @db.Date
  status         String   @db.VarChar(20)
  staff          Staff    @relation(fields: [empid], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "fk_attendance_employee")
}

model roles {
  roleid    Int     @id @default(autoincrement())
  rolename  String  @db.VarChar(100)
  employees Staff[]
}




// google and microsoft authentication and jwt also in authorization . 
csrf tokens , and how tot implement them ...
what are refrest tokens  and access tokens 

how to handle multiple databses in prisma 