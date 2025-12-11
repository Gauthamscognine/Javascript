import prisma from "./PrismaClient.js";

async function renameTable() {
  try {
    await prisma.$executeRaw`
      ALTER TABLE staff RENAME TO employees;
    `;

    console.log("✅ Table renamed successfully!");
  } catch (error) {
    console.error("❌ Error renaming table:", error);
  } finally {
    await prisma.$disconnect();
  }
}

renameTable();
