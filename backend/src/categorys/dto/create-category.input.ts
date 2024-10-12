import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {

  @Field()
  name: string;

  @Field()
  desc: string;
}
