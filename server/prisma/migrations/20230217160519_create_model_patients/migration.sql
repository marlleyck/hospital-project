/*
  Warnings:

  - You are about to drop the column `blood_type` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `imc` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `status_description` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `users` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "weight" REAL NOT NULL DEFAULT 0.00,
    "height" TEXT NOT NULL,
    "imc" TEXT NOT NULL,
    "status_description" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_users" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
