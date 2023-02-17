/*
  Warnings:

  - The primary key for the `Tarefas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tarefas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "task" TEXT NOT NULL,
    "created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_Completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Tarefas" ("created_At", "id", "is_Completed", "task") SELECT "created_At", "id", "is_Completed", "task" FROM "Tarefas";
DROP TABLE "Tarefas";
ALTER TABLE "new_Tarefas" RENAME TO "Tarefas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
