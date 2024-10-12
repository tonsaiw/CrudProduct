import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryDetailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
