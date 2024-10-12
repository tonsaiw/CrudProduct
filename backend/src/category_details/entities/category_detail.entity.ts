import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryDetail {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  desc: string;

  @Field()
  category_id: number;
}
