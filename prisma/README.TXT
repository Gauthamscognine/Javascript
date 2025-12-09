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