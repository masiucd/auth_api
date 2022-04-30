/*
  Warnings:

  - The `size` column on the `shoes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "shoes" DROP COLUMN "size",
ADD COLUMN     "size" INTEGER[];
