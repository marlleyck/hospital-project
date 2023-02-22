/*
  Warnings:

  - Added the required column `doctor` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "weight" REAL NOT NULL DEFAULT 0.00,
    "height" REAL NOT NULL DEFAULT 0.00,
    "imc" TEXT NOT NULL,
    "status_description" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL,
    "doctor" TEXT NOT NULL
);
INSERT INTO "new_patients" ("blood_type", "height", "id", "imc", "name", "status_description", "weight") SELECT "blood_type", "height", "id", "imc", "name", "status_description", "weight" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
