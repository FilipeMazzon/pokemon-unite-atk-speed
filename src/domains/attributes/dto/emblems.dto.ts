import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EmblemsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  level: number;
}
