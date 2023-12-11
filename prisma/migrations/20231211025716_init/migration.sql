-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskName" TEXT NOT NULL,
    "taskStatus" TEXT NOT NULL,
    "employeeID" INTEGER NOT NULL,
    CONSTRAINT "Task_employeeID_fkey" FOREIGN KEY ("employeeID") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
