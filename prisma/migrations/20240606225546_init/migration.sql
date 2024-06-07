-- CreateTable
CREATE TABLE "Insurance" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "insuranceTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Insurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsuranceType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InsuranceType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_insuranceTypeId_fkey" FOREIGN KEY ("insuranceTypeId") REFERENCES "InsuranceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
