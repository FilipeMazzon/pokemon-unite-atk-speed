import { Module } from '@nestjs/common';
import { BuffsService } from './buffs.service';
import { BuffsController } from './buffs.controller';

@Module({
  imports: [],
  controllers: [BuffsController],
  providers: [BuffsService],
})
export class BuffsModule {}
