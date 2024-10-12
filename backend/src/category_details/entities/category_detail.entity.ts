import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryDetail {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
