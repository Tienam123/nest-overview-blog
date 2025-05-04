import { PostStatus } from '../../../domain/enums/post/post-status';
import {IsEnum, IsOptional, IsString} from 'class-validator';

export class UpdatePostDto {
  @IsString()
  title: string;
  @IsString()
  body: string;
  @IsEnum(PostStatus)
  @IsOptional()
  status?: PostStatus|null =  null
}
