/*
  Warnings:

  - Added the required column `userId` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "weight" REAL NOT NULL DEFAULT 0.00,
    "height" REAL NOT NULL DEFAULT 0.00,
    "imc" REAL,
    "status_description" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "patients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_patients" ("blood_type", "doctor", "height", "id", "imc", "name", "status_description", "weight") SELECT "blood_type", "doctor", "height", "id", "imc", "name", "status_description", "weight" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
