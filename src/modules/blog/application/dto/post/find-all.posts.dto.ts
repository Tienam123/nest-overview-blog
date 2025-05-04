import { SortType } from '../../../../../common/domain/enums/sort.enum';
import { IsEnum, IsInt, IsString } from 'class-validator';
import {Transform} from "class-transformer";

export class FindAllPostsDto {
  @IsInt()
  @Transform(({value}) => parseInt(value,10))
  page: number = 1;

  @IsInt()
  @Transform(({value}) => parseInt(value,10))
  limit: number = 10;

  @IsEnum(SortType)
  order: SortType = SortType.ASC;

  @IsString()
  column: string = 'title';
}
