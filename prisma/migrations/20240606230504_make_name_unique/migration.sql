/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Insurance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `InsuranceType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Insurance_name_key" ON "Insurance"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InsuranceType_name_key" ON "InsuranceType"("name");
