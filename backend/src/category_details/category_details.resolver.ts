import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryDetailsService } from './category_details.service';
import { CategoryDetail } from './entities/category_detail.entity';
import { CreateCategoryDetailInput } from './dto/create-category_detail.input';
import { UpdateCategoryDetailInput } from './dto/update-category_detail.input';

@Resolver(() => CategoryDetail)
export class CategoryDetailsResolver {
  constructor(private readonly categoryDetailsService: CategoryDetailsService) {}

  @Mutation(() => CategoryDetail)
  createCategoryDetail(@Args('createCategoryDetailInput') createCategoryDetailInput: CreateCategoryDetailInput) {
    return this.categoryDetailsService.create(createCategoryDetailInput);
  }

  @Query(() => [CategoryDetail], { name: 'categoryDetails' })
  findAll() {
    return this.categoryDetailsService.findAll();
  }

  @Query(() => CategoryDetail, { name: 'categoryDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoryDetailsService.findOne(id);
  }

  @Mutation(() => CategoryDetail)
  updateCategoryDetail(@Args('updateCategoryDetailInput') updateCategoryDetailInput: UpdateCategoryDetailInput) {
    return this.categoryDetailsService.update(updateCategoryDetailInput.id, updateCategoryDetailInput);
  }

  @Mutation(() => CategoryDetail)
  removeCategoryDetail(@Args('id', { type: () => Int }) id: number) {
    return this.categoryDetailsService.remove(id);
  }
}
