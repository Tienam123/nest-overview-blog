import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { BlogModule } from './modules/blog/blog.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getTypeOrmConfig} from "./config/typeorm.config";
import {LocaleMiddleware} from "./common/infrastructure/locale.middleware";
import * as process from "node:process";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:process.cwd()+'/.env'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmConfig,
      inject: [ConfigService],
    }),
    CommonModule,
    AuthModule,
    BlogModule,
  ],
})
export class AppModule {}
