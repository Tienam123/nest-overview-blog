import { PostStatus } from '../../../domain/enums/post/post-status';
import { IsEnum, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsEnum(PostStatus)
  status: PostStatus = PostStatus.DRAFT;
}
