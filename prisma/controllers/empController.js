import prisma from "../PrismaClient.js";

/* ============================
   GET all employees
============================ */
console.log("✅ empController loaded");

//console.log("PRISMA KEYS:", Object.keys(prisma));
export const getAllEmployees = async (req, res) => {
  console.log("PRISMA KEYS:", Object.keys(prisma));

  try {
    const result = await prisma.staff.findMany({
      // include: {
      //   department: true,
      //   roles: true,
      //   attendance: true,
      // },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* ============================
   GET employee by id
============================ */
export const getEmployeeById = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const result = await prisma.staff.findUnique({
      where: { id },
      // include: {
      //   department: true,
      //   roles: true,
      //   attendance: true,
      // },
    });

    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* ============================
   CREATE employee
============================ */
export const createEmployee = async (req, res) => {
  const { name, salary, email, deptid, roleid } = req.body;

  try {
    const newEmp = await prisma.staff.create({
      data: {
        name,
        salary: salary !== undefined ? Number(salary) : null,
        email,
        deptid: deptid !== undefined ? Number(deptid) : null,
        roleid: roleid !== undefined ? Number(roleid) : null,
      },
    });

    res.status(201).json(newEmp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* ============================
   PUT (full update)
============================ */
export const updateEmployee = async (req, res) => {
  const id = Number(req.params.id);
  const { name, salary, email, deptid, roleid } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const existingEmp = await prisma.staff.findUnique({
      where: { id },
    });

    if (!existingEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmp = await prisma.staff.update({
      where: { id },
      data: {
        name,
        salary: salary !== undefined ? Number(salary) : existingEmp.salary,
        email,
        deptid: deptid !== undefined ? Number(deptid) : existingEmp.deptid,
        roleid: roleid !== undefined ? Number(roleid) : existingEmp.roleid,
      },
    });

    res.json(updatedEmp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* ============================
   PATCH (partial update)
============================ */
export const patchEmployee = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  const { name, salary, email, deptid, roleid } = req.body;
  const updateData = {};

  if (name !== undefined) updateData.name = name;
  if (salary !== undefined) updateData.salary = Number(salary);
  if (email !== undefined) updateData.email = email;
  if (deptid !== undefined) updateData.deptid = Number(deptid);
  if (roleid !== undefined) updateData.roleid = Number(roleid);

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ message: "No fields provided to update" });
  }

  try {
    const existingEmp = await prisma.staff.findUnique({
      where: { id },
    });

    if (!existingEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmp = await prisma.staff.update({
      where: { id },
      data: updateData,
    });

    res.json(updatedEmp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

/* ============================
   DELETE employee
============================ */
export const deleteEmployee = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    await prisma.staff.delete({
      where: { id },
    });

    res.json({ message: `Employee deleted successfully with id ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

