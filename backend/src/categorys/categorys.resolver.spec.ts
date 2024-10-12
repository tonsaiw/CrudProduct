import { Test, TestingModule } from '@nestjs/testing';
import { CategorysResolver } from './categorys.resolver';
import { CategorysService } from './categorys.service';

describe('CategorysResolver', () => {
  let resolver: CategorysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorysResolver, CategorysService],
    }).compile();

    resolver = module.get<CategorysResolver>(CategorysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
