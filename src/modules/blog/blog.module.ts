import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/posts/posts.controller';

@Module({
  controllers: [PostsController]
})
export class BlogModule {}
