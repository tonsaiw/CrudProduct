import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategorysService {
  constructor(private prisma: PrismaService) {}

  async getCategories(): Promise<Category[]> {
    return this.prisma.category.findMany({ include: { category_details: true } });
  }

  async getCategory(id: number): Promise<Category> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async createCategory(data: CreateCategoryInput): Promise<Category> {
    const existingCategory = await this.prisma.category.findUnique({
      where: { name: data.name },
    });

    if (existingCategory) {
      throw new Error('Category already exists');
    }
    
    return this.prisma.category.create({
      data: {
        name: data.name,
        desc: data.desc,
      },
    });
  }

  async deleteCategory(id: number): Promise<Category> {
    console.log("deleteService", id);
    return this.prisma.category.delete({
      where: { id },
    });
  }

  async updateCategory(data: UpdateCategoryInput): Promise<Category> {
    const existingCategory = await this.prisma.category.findUnique({
      where: { name: data.name },
    });

    if (existingCategory) {
      throw new Error('Category already have this name');
    }
    
    return this.prisma.category.update({
      where: { id: data.id },
      data: {
        name: data.name,
        desc: data.desc,
      },
    });
  }
}
