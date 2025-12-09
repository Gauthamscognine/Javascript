import prisma from "../PrismaClient.js";

// GET all employees
export const getAllEmployees = async (req, res) => {
  try {
    const result = await prisma.employees.findMany();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// GET employee by id
export const getEmployeeById = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const result = await prisma.employees.findUnique({
      where: { id },
    });

    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// CREATE employee
export const createEmployee = async (req, res) => {
  const { name, role, sal, email, deptid } = req.body;

  try {
    const newEmp = await prisma.employees.create({
      data: {
        name,
        role,
        sal: sal !== undefined ? Number(sal) : null,
        email,
        deptid: deptid !== undefined ? Number(deptid) : null,
      },
    });

    res.status(201).json(newEmp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT (full update)
export const updateEmployee = async (req, res) => {
  const id = Number(req.params.id);
  const { name, role, sal, email, deptid } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const existingEmp = await prisma.employees.findUnique({
      where: { id },
    });

    if (!existingEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmp = await prisma.employees.update({
      where: { id },
      data: {
        name,
        role,
        sal: sal !== undefined ? Number(sal) : existingEmp.sal,
        email,
        deptid: deptid !== undefined ? Number(deptid) : existingEmp.deptid,
      },
    });

    res.json(updatedEmp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PATCH (partial update)
export const patchEmployee = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  const { name, role, sal, email, deptid } = req.body;
  const updateData = {};

  if (name !== undefined) updateData.name = name;
  if (role !== undefined) updateData.role = role;
  if (sal !== undefined) updateData.sal = Number(sal);
  if (email !== undefined) updateData.email = email;
  if (deptid !== undefined) updateData.deptid = Number(deptid);

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ message: "No fields provided to update" });
  }

  try {
    const existingEmp = await prisma.employees.findUnique({
      where: { id },
    });

    if (!existingEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updatedEmp = await prisma.employees.update({
      where: { id },
      data: updateData,
    });

    res.json(updatedEmp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE employee
export const deleteEmployee = async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    await prisma.employees.delete({
      where: { id },
    });

    res.json({ message: `Employee deleted successfully with id ${id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
