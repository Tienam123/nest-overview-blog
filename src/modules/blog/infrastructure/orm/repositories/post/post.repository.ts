import { Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../../../../domain/repositories/post/post.repository.interface';
import { Post } from '../../../../domain/entites/post/post';
import { PostMapper } from '../../entities/post/post.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../../entities/post/post.entity';
import { Repository } from 'typeorm';
import {FindAllPostsDto} from "../../../../application/dto/post/find-all.posts.dto";

@Injectable()
export class PostRepository implements PostRepositoryInterface {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postOrmRepository: Repository<PostEntity>,
  ) {}

  async save(postDomain: Post): Promise<Post> {
    const postEntity = PostMapper.toPersistance(postDomain);
    const savedPost = await this.postOrmRepository.save(postEntity);
    return PostMapper.toDomain(savedPost);
  }

  async findAll({ page, limit, order, column }:FindAllPostsDto): Promise<Post[]> {
    const skip = (page - 1) * limit;
    const posts = await this.postOrmRepository.find({
      skip,
      take: limit,
      order: { [column]: order },
    });
    return posts.map(PostMapper.toDomain)
  }
}
