import { Injectable } from '@nestjs/common';
import { CreateCategoryDetailInput } from './dto/create-category_detail.input';
import { UpdateCategoryDetailInput } from './dto/update-category_detail.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Category_details } from '@prisma/client';

@Injectable()
export class CategoryDetailsService {
  constructor(private prisma: PrismaService) {}
  
    async createCatory_detail(data: CreateCategoryDetailInput): Promise<Category_details> {
      return await this.prisma.category_details.create({
        data: {
          name: data.name,
          desc: data.desc,
          categoryId: data.category_id
        }
      });
    }

  async findAll() : Promise<Category_details[]> {
    return await this.prisma.category_details.findMany({
      include: { category: true },
    });;
  }

  async findOne(id: number): Promise<Category_details> {
    return this.prisma.category_details.findUnique({
      where: { id },
    })
  }

  async updateCategoryDetail(data: UpdateCategoryDetailInput): Promise<Category_details> {
    return this.prisma.category_details.update({
      where: { id: data.id },
      data: {
        name: data.name,
        desc: data.desc,
      },
    });
  }

  async deleteCategoryDetail(id: number): Promise<Category_details> {
    return this.prisma.category_details.delete({
      where: { id },
    });
  }

}
