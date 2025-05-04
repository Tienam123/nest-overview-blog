import {LocaleService} from "../../../../../common/application/services/locale.service";
import {PostRepositoryInterface} from "../../../domain/repositories/post/post.repository.interface";
import {Injectable} from "@nestjs/common";
import {Locale} from "../../../../../common/domain/enums/locale.enum";
@Injectable()
export class FindByIdPostService {
    constructor(
        private readonly postRepository: PostRepositoryInterface,
        private readonly localeService:LocaleService
    ) {}

 async handle(id: number) {
        const currentLocale = this.localeService.getCurrentLocale() as Locale;
     const post = await this.postRepository.getById(id);
     if (post === null) {
         return null;
     }
     return {
         id: post.id,
         title: post.title.get(currentLocale),
         body: post.body.get(currentLocale)
     }
  }
}
