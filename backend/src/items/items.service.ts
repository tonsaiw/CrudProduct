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
}
