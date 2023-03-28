// eslint-disable-next-line import/namespace
import * as axios from '@nuxtjs/axios';
import { ICommentService } from './../core/ICommentService';
import { Comment } from '~/plugins/models';

export default class ApiCommentService implements ICommentService {
    axios: axios.NuxtAxiosInstance

    constructor($axios: axios.NuxtAxiosInstance) {
        this.axios = $axios;
    }
    
    getAll(): Promise<Comment[]> {
        return this.axios.$get<Comment[]>(`/comments`);
    }
    
    getById(id: number): Promise<Comment> {
        return this.axios.$get<Comment>(`/comments/${id}`);
    }
    
    getByPost(id: number): Promise<Comment[]> {
        return this.axios.$get<Comment[]>(`/comments?postId=${id}`);
    }

}