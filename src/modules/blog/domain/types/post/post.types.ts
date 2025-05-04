import {PostStatus} from "../../enums/post/post-status";

export interface PostProps {
  id: number;
  title: Record<string, string>;
  body: Record<string, string>;
  status: PostStatus;
  createdAt: Date;
  updatedAt?: Date;
}