/*
  Warnings:

  - You are about to drop the `Shoe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Shoe";

-- CreateTable
CREATE TABLE "shoes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shoes_pkey" PRIMARY KEY ("id")
);
