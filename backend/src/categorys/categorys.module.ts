import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysResolver } from './categorys.resolver';

@Module({
  providers: [CategorysResolver, CategorysService],
})
export class CategorysModule {}
