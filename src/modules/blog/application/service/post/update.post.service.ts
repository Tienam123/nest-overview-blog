import { Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../../../domain/repositories/post/post.repository.interface';
import { UpdatePostDto } from '../../dto/post/update.post.dto';
import { Post } from '../../../domain/entites/post/post';
import { LocalizedField } from '../../../domain/object-values/localized-field';
import { LocaleService } from '../../../../../common/application/services/locale.service';
import {PostProps} from "../../../domain/types/post/post.types";

@Injectable()
export class UpdatePostService {
  constructor(
    private readonly postRepository: PostRepositoryInterface,
    private readonly localeService: LocaleService,
  ) {}

  async handle(id: number, context: UpdatePostDto):Promise<PostProps|null> {
    const existingPost = await this.postRepository.getById(id);

    if (existingPost === null) {
      return existingPost;
    }
    console.log(existingPost)
    const currentLocale = this.localeService.getCurrentLocale();

    const updatedTitle = {
      ...existingPost.toPlain().title,
      [currentLocale]: context.title,
    };
    const updatedBody = {
      ...existingPost.toPlain().body,
      [currentLocale]: context.body,
    };
    existingPost.title = new LocalizedField(updatedTitle);
    existingPost.body = new LocalizedField(updatedBody);

    if (context.status) {
      existingPost.status = context.status
    }
    existingPost.updatedAt = new Date();
    const updatedPost = await this.postRepository.update(existingPost);
    return updatedPost.toPlain()
  }
}
