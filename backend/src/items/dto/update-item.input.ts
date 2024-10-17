import { CreateItemInput } from './create-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  desc: string;

  @Field()
  item_img: string;

  @Field()
  amount: number;

  @Field()
  price: number;

  @Field()
  cost_price: number;
}
