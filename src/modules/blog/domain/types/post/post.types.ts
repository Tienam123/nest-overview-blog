import {PostStatus} from "../../enums/post/post-status";

export interface PostProps {
  id: string;
  title: string;
  body: string;
  authorId: string;
  status: PostStatus;
  createdAt: Date;
  updatedAt?: Date;
}