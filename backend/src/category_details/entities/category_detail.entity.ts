import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from '../../categorys/entities/category.entity';

@ObjectType()
export class CategoryDetail {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  desc: string;

  @Field(() => Category, { nullable: true })
  category: Category;
}
