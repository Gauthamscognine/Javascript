-- Rename column without losing data
ALTER TABLE "emp"
RENAME COLUMN "microsoftId" TO "providerId";

-- Rename the unique index (optional but recommended)
ALTER INDEX "emp_microsoftId_key"
RENAME TO "emp_providerId_key";
