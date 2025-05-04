import { Body, Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../../../domain/repositories/post/post.repository.interface';
import { FindAllPostsDto } from '../../dto/post/find-all.posts.dto';

@Injectable()
export class FindAllPostsService {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  async handle(context: FindAllPostsDto) {
    const posts = await this.postRepository.findAll(context);
    return {
      total: posts.length,
      page: context.page,
      items: posts,
    };
  }
}
