import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Item } from '@prisma/client';

@Injectable()
export class ItemsService {

  constructor(private prisma: PrismaService) {}
  async createItem(createItemInput: CreateItemInput): Promise<Item> {
    return await this.prisma.item.create({
      data: {
        name: createItemInput.name,
        desc: createItemInput.desc,
        item_img: createItemInput.item_img,
        amount: createItemInput.amount,
        price: createItemInput.price,
        cost_price: createItemInput.cost_price,
        category: { connect: { id: createItemInput.category_id } },
  }});
  }

  async getItems() {
    return await this.prisma.item.findMany({ include: { category: true } });
  }

  async findOne(id: number): Promise<Item> {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateItemInput: UpdateItemInput): Promise<Item> {
    return this.prisma.item.update({
      where: { id },
      data: {
        name: updateItemInput.name,
        desc: updateItemInput.desc,
        item_img: updateItemInput.item_img,
        amount: updateItemInput.amount,
        price: updateItemInput.price,
        cost_price: updateItemInput.cost_price
      },
    });
  }

  async delete(id: number): Promise<Item> {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
