import { Test, TestingModule } from '@nestjs/testing';
import { BuffsController } from './buffs.controller';
import { BuffsService } from './buffs.service';

describe('BuffsController', () => {
  let controller: BuffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuffsController],
      providers: [BuffsService],
    }).compile();

    controller = module.get<BuffsController>(BuffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
