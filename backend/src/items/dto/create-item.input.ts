import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  name: string;

  @Field()
  desc?: string;

  @Field({nullable: true})
  item_img?: string;
  
  @Field()
  amount: number;

  @Field()
  price: number;

  @Field({nullable: true})
  cost_price?: number;

  @Field()
  category_id: number;
}