/*
  Warnings:

  - You are about to drop the column `userId` on the `patients` table. All the data in the column will be lost.
  - Added the required column `patientId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    CONSTRAINT "users_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_users" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
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
