import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ItemsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  level: number;
}
