import { Test, TestingModule } from '@nestjs/testing';
import { CategoryDetailsResolver } from './category_details.resolver';
import { CategoryDetailsService } from './category_details.service';

describe('CategoryDetailsResolver', () => {
  let resolver: CategoryDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryDetailsResolver, CategoryDetailsService],
    }).compile();

    resolver = module.get<CategoryDetailsResolver>(CategoryDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
