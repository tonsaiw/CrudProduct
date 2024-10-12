import { CreateCategoryDetailInput } from './create-category_detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryDetailInput extends PartialType(CreateCategoryDetailInput) {
  @Field(() => Int)
  id: number;
}
