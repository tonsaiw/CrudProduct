import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  create(createProductInput: CreateProductInput) {
    this.products.push(createProductInput);
    return createProductInput;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find(product => product.id === id);
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
