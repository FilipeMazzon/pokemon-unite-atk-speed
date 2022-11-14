import { Test, TestingModule } from '@nestjs/testing';
import { BuffsService } from './buffs.service';

describe('BuffsService', () => {
  let service: BuffsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuffsService],
    }).compile();

    service = module.get<BuffsService>(BuffsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
