import { CreatePostDto } from '../../dto/post/create.post.dto';
import { Post } from '../../../domain/entites/post/post';
import { Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../../../domain/repositories/post/post.repository.interface';
import { LocalizedField } from '../../../domain/object-values/localized-field';
import { LocaleService } from '../../../../../common/application/services/locale.service';

@Injectable()
export class CreatePostService {
  constructor(
    private readonly postRepository: PostRepositoryInterface,
    private readonly localeService: LocaleService,
  ) {}

 async handle(context: CreatePostDto) {
    const title = new LocalizedField({
      [this.localeService.getCurrentLocale()]: context.title,
    });
    const body = new LocalizedField({
      [this.localeService.getCurrentLocale()]: context.body,
    });

    const post = new Post(
      0,
      title,
      body,
      context.status,
      new Date(),
      new Date(),
    );

    try {
      const createdPost = await this.postRepository.save(post);
      console.log(createdPost)
      return createdPost;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
