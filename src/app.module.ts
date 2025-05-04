import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [CommonModule, AuthModule, ProductModule, BlogModule],
})
export class AppModule {}
