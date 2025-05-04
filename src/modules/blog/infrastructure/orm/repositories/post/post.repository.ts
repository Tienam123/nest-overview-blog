import { Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../../../../domain/repositories/post/post.repository.interface';
import { Post } from '../../../../domain/entites/post/post';
import { PostMapper } from '../../entities/post/post.mapper';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from '../../entities/post/post.entity';
import { Repository } from 'typeorm';
import { FindAllPostsDto } from '../../../../application/dto/post/find-all.posts.dto';
import { LocaleService } from '../../../../../../common/application/services/locale.service';
import { LocalizedField } from '../../../../domain/object-values/localized-field';
import { PostStatus } from '../../../../domain/enums/post/post-status';
import {UpdatePostDto} from "../../../../application/dto/post/update.post.dto";

@Injectable()
export class PostRepository implements PostRepositoryInterface {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postOrmRepository: Repository<PostEntity>,
    private readonly localeService: LocaleService,
  ) {}

  async save(postDomain: Post): Promise<any> {
    console.log(postDomain.toPlain());
    const postEntity = PostMapper.toPersistance(postDomain);
    const savedPost = await this.postOrmRepository.save(postEntity);
    return PostMapper.toDomain(savedPost);
  }

  async findAll({
    page,
    limit,
    order,
    column,
  }: FindAllPostsDto): Promise<Post[]> {
    const skip = (page - 1) * limit;
    const posts = await this.postOrmRepository.find({
      skip,
      take: limit,
      order: { [column]: order },
    });
    return posts.map((el) => PostMapper.toDomain(el));
  }

  async getById(id): Promise<Post | null> {
    const post = await this.postOrmRepository.findOne({ where: { id: id } });
    if (post === null) {
      return post;
    }
    return PostMapper.toDomain(post);
  }

  async update(post:Post) {
    const postToUpdate = PostMapper.toPersistance(post);
    const updatedPost =  await this.postOrmRepository.save(postToUpdate);
    return PostMapper.toDomain(updatedPost);
  }
}
