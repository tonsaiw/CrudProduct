import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  id : string;

  @Field()
  name: string;

  @Field()
  description: string;
}
