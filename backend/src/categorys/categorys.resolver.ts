import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategorysService } from './categorys.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
export class CategorysResolver {
  constructor(private readonly categoryService: CategorysService) {}

  @Query(() => [Category])
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.createCategory(createCategoryInput);
  }
}
