import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysResolver } from './categorys.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CategorysResolver, CategorysService],
})
export class CategorysModule {}
