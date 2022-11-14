import { IsNotEmpty, IsNumber } from 'class-validator';

export class EmblemsDto {
  @IsNotEmpty()
  @IsNumber()
  level: number;
}
