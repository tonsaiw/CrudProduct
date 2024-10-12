import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CategorysModule } from './categorys/categorys.module';
import { CategoryDetailsModule } from './category_details/category_details.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
  }),ProductsModule,
  ConfigModule.forRoot({
    envFilePath: '.env',
  }),
  CategorysModule,
  CategoryDetailsModule,
  ItemsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
