/*
  Warnings:

  - Added the required column `blood_type` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imc` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_description` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "weight" REAL NOT NULL DEFAULT 0.00,
    "height" TEXT NOT NULL,
    "imc" TEXT NOT NULL,
    "status_description" TEXT NOT NULL,
    "blood_type" TEXT NOT NULL
);
INSERT INTO "new_users" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
