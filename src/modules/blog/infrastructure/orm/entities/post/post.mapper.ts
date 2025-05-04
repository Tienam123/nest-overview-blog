import {PostEntity} from "./post.entity";
import {Post} from "../../../../domain/entites/post/post";

export class PostMapper {
  static toDomain(entity:PostEntity) :Post{
      return new Post(
          entity.id,
          entity.title,
          entity.body,
          entity.status,
          entity.createdAt,
          entity.updatedAt,
      )
  }


    static toPersistance(domain: Post): PostEntity {
        const entity = new PostEntity();
        entity.id = domain.id;
        entity.title = domain.title;
        entity.body = domain.body;
        entity.status = domain.status;
        entity.createdAt = domain.createdAt;
        entity.updatedAt = domain.updatedAt
        return entity;
    }
}