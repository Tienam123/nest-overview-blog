import { PostStatus } from '../../enums/post/post-status';
import {LocalizedField} from "../../object-values/localized-field";

export class Post {
  constructor(
    public readonly id: number = 0,
    public title: LocalizedField,
    public body: LocalizedField,
    public status: PostStatus = PostStatus.DRAFT,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}


  toPlain() {
    return {
      id: this.id,
      title: this.title.getAll(), // ← Преобразуем к объекту с переводами
      body: this.body.getAll(),
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
