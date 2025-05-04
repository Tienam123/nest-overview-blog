import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/posts/posts.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "./infrastructure/orm/entities/post/post.entity";
import {CreatePostService} from "./application/service/post/create.post.service";
import {PostRepository} from "./infrastructure/orm/repositories/post/post.repository";
import {PostRepositoryInterface} from "./domain/repositories/post/post.repository.interface";
import {FindAllPostsService} from "./application/service/post/find-all.posts.service";
import {LocaleService} from "../../common/application/services/locale.service";
import {FindByIdPostService} from "./application/service/post/find-by-id.post.service";
import {UpdatePostService} from "./application/service/post/update.post.service";

@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [
    CreatePostService,
      FindAllPostsService,
      LocaleService,
      FindByIdPostService,
      UpdatePostService,
    {
      provide: PostRepositoryInterface,
      useClass: PostRepository
    }
  ]
})
export class BlogModule {}
