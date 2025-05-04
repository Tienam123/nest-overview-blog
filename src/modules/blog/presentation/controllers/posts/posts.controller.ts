import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreatePostDto} from "../../../application/dto/post/create.post.dto";
import {CreatePostService} from "../../../application/service/post/create.post.service";
import {Post as PostEntity} from '../../../domain/entites/post/post'
import {FindAllPostsDto} from "../../../application/dto/post/find-all.posts.dto";
import {FindAllPostsService} from "../../../application/service/post/find-all.posts.service";

@Controller('blog')
export class PostsController {
  constructor(
      private readonly createPostService:CreatePostService,
      private readonly findAllPostService: FindAllPostsService

  ) {
  }
  @Get()
  async getAll(@Body() context:FindAllPostsDto) {
    return this.findAllPostService.handle(context)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {}

  @Post()
  async create(@Body() context: CreatePostDto):Promise<PostEntity> {
    const post = this.createPostService.handle(context)
    return post;
  }
}
