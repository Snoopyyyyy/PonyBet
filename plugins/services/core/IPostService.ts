import { Post, Comment } from "~/plugins/models";

export interface IPostService {
    getAll(): Promise<Post[]>;
    getById(id: number): Promise<Post>;
    getComments(postId: number): Promise<Comment[]>;
    create(post: Post): Promise<Post>;
    update(id: number, post: Post): Promise<Post>;
    patch(id: number, data: { title: string, body: string }): Promise<Post>;
    delete(id: number): Promise<Post>
}