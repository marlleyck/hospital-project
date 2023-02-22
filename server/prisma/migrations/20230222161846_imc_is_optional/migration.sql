/*
  Warnings:

  - You are about to alter the column `imc` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

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
    "doctor" TEXT NOT NULL
);
INSERT INTO "new_patients" ("blood_type", "doctor", "height", "id", "imc", "name", "status_description", "weight") SELECT "blood_type", "doctor", "height", "id", "imc", "name", "status_description", "weight" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
