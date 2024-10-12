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

  async createCategory(data: CreateCategoryInput): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name: data.name,
        desc: data.desc,
      },
    });
  }
}
