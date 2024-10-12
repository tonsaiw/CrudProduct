import { Module } from '@nestjs/common';
import { CategoryDetailsService } from './category_details.service';
import { CategoryDetailsResolver } from './category_details.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports : [PrismaModule],
  providers: [CategoryDetailsResolver, CategoryDetailsService],
})
export class CategoryDetailsModule {}
