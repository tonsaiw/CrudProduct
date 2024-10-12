import { Injectable } from '@nestjs/common';
import { CreateCategoryDetailInput } from './dto/create-category_detail.input';
import { UpdateCategoryDetailInput } from './dto/update-category_detail.input';

@Injectable()
export class CategoryDetailsService {
  create(createCategoryDetailInput: CreateCategoryDetailInput) {
    return 'This action adds a new categoryDetail';
  }

  findAll() {
    return `This action returns all categoryDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryDetail`;
  }

  update(id: number, updateCategoryDetailInput: UpdateCategoryDetailInput) {
    return `This action updates a #${id} categoryDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryDetail`;
  }
}
