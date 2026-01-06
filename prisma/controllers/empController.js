// import prisma from "../PrismaClient.js";



// export const getAllEmployees = async (req, res) => {
//   const limit = Number(req.query.limit)|| 5;
//   const  page= Number(req.query.page) || 1;

//   const skip = (page-1)*limit;

//   try {
//     const result = await prisma.staff.findMany({
//     });
//      res.json({
//       // page,
//       // limit,
//       data: result
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };




// export const dept_empCount = async(req,res)=>{
//   const deptid = Number(req.params.id);
//   const result = await prisma.staff.aggregate({
//     where:{deptid},
//     _avg:{
//       sal:true
//     },
    
//   });
//   res.send(result);
// };



// // json from the db only . 
// //shadow databse and how it works .




// /* ============================
//    GET employee by id
// ============================ */
// export const getEmployeeById = async (req, res) => {
//   const id = Number(req.params.id);
//   if (isNaN(id)) {
//     return res.status(400).json({ message: "Invalid employee id" });
//   }

//   try {
//     const result = await prisma.staff.findUnique({
//       where: { id },
//       // include: {
//       //   department: true,
//       //   roles: true,
//       //   attendance: true,
//       // },
//     });

//     if (!result) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ============================
//    CREATE employee
// ============================ */
// export const createEmployee = async (req, res) => {
//   const { name, sal, email, deptid, roleid } = req.body;

//   try {
//     const newEmp = await prisma.staff.create({
//       data: {
//         name,
//         sal: sal !== undefined ? Number(sal) : null,
//         email,
//         deptid: deptid !== undefined ? Number(deptid) : null,
//         roleid: roleid !== undefined ? Number(roleid) : null,
//       },
//     });

//     res.status(201).json(newEmp);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ============================
//    PUT (full update)
// ============================ */
// export const updateEmployee = async (req, res) => {
//   const id = Number(req.params.id);
//   const { name, sal, email, deptid, roleid } = req.body;

//   if (isNaN(id)) {
//     return res.status(400).json({ message: "Invalid employee id" });
//   }

//   try {
//     const existingEmp = await prisma.staff.findUnique({
//       where: { id },
//     });

//     if (!existingEmp) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     const updatedEmp = await prisma.staff.update({
//       where: { id },
//       data: {
//         name,
//         sal: sal !== undefined ? Number(sal) : existingEmp.sal,
//         email,
//         deptid: deptid !== undefined ? Number(deptid) : existingEmp.deptid,
//         roleid: roleid !== undefined ? Number(roleid) : existingEmp.roleid,
//       },
//     });

//     res.json(updatedEmp);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ============================
//    PATCH (partial update)
// ============================ */
// export const patchEmployee = async (req, res) => {
//   const id = Number(req.params.id);
//   if (isNaN(id)) {
//     return res.status(400).json({ message: "Invalid employee id" });
//   }

//   const { name, sal, email, deptid, roleid } = req.body;
//   const updateData = {};

//   if (name !== undefined) updateData.name = name;
//   if (sal !== undefined) updateData.sal = Number(sal);
//   if (email !== undefined) updateData.email = email;
//   if (deptid !== undefined) updateData.deptid = Number(deptid);
//   if (roleid !== undefined) updateData.roleid = Number(roleid);

//   if (Object.keys(updateData).length === 0) {
//     return res.status(400).json({ message: "No fields provided to update" });
//   }

//   try {
//     const existingEmp = await prisma.staff.findUnique({
//       where: { id },
//     });

//     if (!existingEmp) {
//       return res.status(404).json({ message: "Employee not found" });
//     }

//     const updatedEmp = await prisma.staff.update({
//       where: { id },
//       data: updateData,
//     });

//     res.json(updatedEmp);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

// /* ============================
//    DELETE employee
// ============================ */
// export const deleteEmployee = async (req, res) => {
//   const id = Number(req.params.id);
//   if (isNaN(id)) {
//     return res.status(400).json({ message: "Invalid employee id" });
//   }

//   try {
//     await prisma.staff.delete({
//       where: { id },
//     });

//     res.json({ message: `Employee deleted successfully with id ${id}` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };


import prisma from "../PrismaClient.js";
import EmpError from "../utils/empError.js";

/* ============================
   GET all employees
============================ */
export const getAllEmployees = async (req, res) => {
  const result = await prisma.staff.findMany();
  res.json({ data: result });
};

/* ============================
   GET employee by id
============================ */
export const getEmployeeById = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new EmpError("Invalid employee id", 400);
  }

  const emp = await prisma.staff.findUnique({ where: { id } });

  if (!emp) {
    throw new EmpError("Employee not found", 404);
  }

  res.json(emp);
};

/* ============================
   CREATE employee
============================ */
export const createEmployee = async (req, res) => {
  const { name, sal, email, deptid, roleid } = req.body;

  const emp = await prisma.staff.create({
    data: {
      name,
      sal: sal ? Number(sal) : null,
      email,
      deptid: deptid ? Number(deptid) : null,
      roleid: roleid ? Number(roleid) : null,
    },
  });

  res.status(201).json(emp);
};

/* ============================
   UPDATE employee
============================ */
export const updateEmployee = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new EmpError("Invalid employee id", 400);
  }

  const emp = await prisma.staff.findUnique({ where: { id } });
  if (!emp) {
    throw new EmpError("Employee not found", 404);
  }

  const updated = await prisma.staff.update({
    where: { id },
    data: req.body,
  });

  res.json(updated);
};

/* ============================
   DELETE employee
============================ */
export const deleteEmployee = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new EmpError("Invalid employee id", 400);
  }

  await prisma.staff.delete({ where: { id } });

  res.json({ message: "Employee deleted successfully" });
};
