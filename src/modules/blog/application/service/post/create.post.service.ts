import { CreatePostDto } from '../../dto/post/create.post.dto';
import { Post } from '../../../domain/entites/post/post';
import { Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../../../domain/repositories/post/post.repository.interface';

@Injectable()
export class CreatePostService {
  constructor(private readonly postRepository: PostRepositoryInterface) {}

  handle(context: CreatePostDto): Promise<Post> {
    const post = new Post(
      0,
      context.title,
      context.body,
      context.status,
      new Date(),
      new Date(),
    );
    try {
      const createdPost = this.postRepository.save(post);
      return createdPost;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
