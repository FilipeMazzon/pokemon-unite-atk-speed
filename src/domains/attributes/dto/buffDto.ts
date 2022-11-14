import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BuffDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  stack?: number;

  @IsOptional()
  @IsString()
  form: string;

  @IsOptional()
  @IsBoolean()
  isPlus: boolean;
}
