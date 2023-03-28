// eslint-disable-next-line import/namespace
import * as axios from '@nuxtjs/axios';
import { ICommentService } from './../core/ICommentService';
import { Comment } from '~/plugins/models';

export default class ApiCommentService implements ICommentService {
    axios: axios.NuxtAxiosInstance
    apiUrl: string

    constructor(apiUrl: string, $axios: axios.NuxtAxiosInstance) {
        this.axios = $axios;
        this.apiUrl = apiUrl;
    }
    
    getAll(): Promise<Comment[]> {
        return this.axios.$get<Comment[]>(`${this.apiUrl}/comments`);
    }
    
    getById(id: number): Promise<Comment> {
        return this.axios.$get<Comment>(`${this.apiUrl}/comments/${id}`);
    }
    
    getByPost(id: number): Promise<Comment[]> {
        return this.axios.$get<Comment[]>(`${this.apiUrl}/comments?postId=${id}`);
    }

}