import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {CreatePostDto} from "../../../application/dto/post/create.post.dto";
import {CreatePostService} from "../../../application/service/post/create.post.service";
import {Post as PostEntity} from '../../../domain/entites/post/post'
import {FindAllPostsDto} from "../../../application/dto/post/find-all.posts.dto";
import {FindAllPostsService} from "../../../application/service/post/find-all.posts.service";
import {FindByIdPostService} from "../../../application/service/post/find-by-id.post.service";
import {UpdatePostService} from "../../../application/service/post/update.post.service";
import {UpdatePostDto} from "../../../application/dto/post/update.post.dto";
import {PostProps} from "../../../domain/types/post/post.types";

@Controller('blog')
export class PostsController {
  constructor(
    private readonly createPostService: CreatePostService,
    private readonly findAllPostService: FindAllPostsService,
    private readonly findByIdService: FindByIdPostService,
    private readonly updatePostService: UpdatePostService
  ) {}
  @Get()
  async getAll(@Body() context: FindAllPostsDto) {
    return this.findAllPostService.handle(context);
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.findByIdService.handle(id);
  }

  @Post()
  async create(@Body() context: CreatePostDto) {
    const post = await this.createPostService.handle(context);
    return post.toPlain();
  }

  @Patch('/:id')
  async update(@Param('id') id:number, @Body() context: UpdatePostDto):Promise<PostProps|null> {
    return this.updatePostService.handle(id,context);
  }
}
