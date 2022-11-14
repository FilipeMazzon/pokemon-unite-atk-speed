import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ItemsDto } from './items.dto';
import { BuffDto } from './buffDto';
import { EmblemsDto } from './emblems.dto';

export class AtkSpeedDto {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => BuffDto)
  buffs: BuffDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ItemsDto)
  items: ItemsDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => EmblemsDto)
  emblems: EmblemsDto;
}
