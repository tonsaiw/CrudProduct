/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductType" DROP CONSTRAINT "ProductType_productId_fkey";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductType";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category_details" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Category_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "item_img" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "cost_price" DOUBLE PRECISION NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category_details" ADD CONSTRAINT "Category_details_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
