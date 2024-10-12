import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/categorys/entities/category.entity';


@ObjectType()
export class Item {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({nullable: true})
  desc?: string;

  @Field({nullable: true})
  item_img: string;
  
  @Field()
  amount: number;

  @Field()
  price: number;

  @Field()
  cost_price: number;

  @Field(() => Category, { nullable: true })
  category: Category;
}