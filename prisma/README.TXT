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