import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryDetailInput {
  @Field()
  name: string;
  
  @Field()
  desc: string;

  @Field()
  category_id: number;
}
