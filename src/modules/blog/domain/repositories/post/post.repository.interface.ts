import {Post} from "../../entites/post/post";
import {FindAllPostsDto} from "../../../application/dto/post/find-all.posts.dto";
import {UpdatePostDto} from "../../../application/dto/post/update.post.dto";

export abstract class PostRepositoryInterface {
    findAll:(post:FindAllPostsDto) => Promise<Post[]>
    save: (post:Post) => Promise<Post>
    getById:(id:number) => Promise<Post|null>
    update:(post:Post) => Promise<Post>
}
