import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [CommonModule, AuthModule, BlogModule],
})
export class AppModule {}
