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

  @Query(() => Category)
  getCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.getCategory(id);
  }

  @Mutation(() => Category)
  async createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.createCategory(createCategoryInput);
  }

  @Mutation(() => Category)
  async deleteCategory(@Args('id', { type: () => Int}) id: number) {
    console.log("delete Resolver", id);
    return this.categoryService.deleteCategory(id);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.updateCategory(updateCategoryInput);
  }
}
