import { Module } from '@nestjs/common';
import { CategoryDetailsService } from './category_details.service';
import { CategoryDetailsResolver } from './category_details.resolver';

@Module({
  providers: [CategoryDetailsResolver, CategoryDetailsService],
})
export class CategoryDetailsModule {}
