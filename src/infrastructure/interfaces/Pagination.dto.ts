import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  PAGINATION_PAGE,
  PAGINATION_PAGE_SIZE_DEFAULT,
} from '../configs/pagination.config';

export class PaginationDto {
  @IsNotEmpty()
  @IsNumber()
  pageSize: number = PAGINATION_PAGE_SIZE_DEFAULT;

  @IsNotEmpty()
  @IsNumber()
  page: number = PAGINATION_PAGE;
}
