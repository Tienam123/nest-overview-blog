import {PostEntity} from "./post.entity";
import {Post} from "../../../../domain/entites/post/post";
import {LocaleService} from "../../../../../../common/application/services/locale.service";
import {LocalizedField} from "../../../../domain/object-values/localized-field";

export class PostMapper {
    constructor(
        private readonly localeService:LocaleService
    ) {
    }
  static toDomain(entity:PostEntity) :Post{
      return new Post(
          entity.id,
         new LocalizedField(entity.title),
          new LocalizedField(entity.body),
          entity.status,
          entity.createdAt,
          entity.updatedAt,
      )
  }


    static toPersistance(domain: Post): PostEntity {

        const entity = new PostEntity();
        entity.id = domain.id;
        entity.title = domain.toPlain().title;
        entity.body = domain.toPlain().body;
        entity.status = domain.status;
        entity.createdAt = domain.createdAt;
        entity.updatedAt = domain.updatedAt
        return entity;
    }
}