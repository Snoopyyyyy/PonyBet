import { Comment } from "~/plugins/models";

export interface ICommentService {
    getAll(): Promise<Comment[]>;
    getById(id: number): Promise<Comment>;
    getByPost(id: number): Promise<Comment[]>;
}