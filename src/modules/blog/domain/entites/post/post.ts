import { PostStatus } from '../../enums/post/post-status';

export class Post {
  constructor(
    public readonly id: number = 0,
    public title: string,
    public body: string,
    public status: PostStatus = PostStatus.DRAFT,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}
}
