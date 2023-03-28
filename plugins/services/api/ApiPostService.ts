// eslint-disable-next-line import/namespace
import * as axios from '@nuxtjs/axios';
import { IPostService } from './../core/IPostService';
import { Post, Comment } from '~/plugins/models';

const headers = { 
    headers: { 
        'Content-type': "application/json; charset=UTF-8" 
    } 
};

export default class ApiPostService implements IPostService {
    axios: axios.NuxtAxiosInstance
    apiUrl: string

    constructor(apiUrl: string, $axios: axios.NuxtAxiosInstance) {
        this.axios = $axios;
        this.apiUrl = apiUrl;
    }
    
    getAll(): Promise<Post[]> {
        return this.axios.$get<Post[]>(`${this.apiUrl}/posts`);
    }
    
    getById(id: number): Promise<Post> {
        return this.axios.$get<Post>(`${this.apiUrl}/posts/${id}`);
    }
    
    getComments(postId: number): Promise<Comment[]> {
        return this.axios.$get<Comment[]>(`${this.apiUrl}/posts/${postId}/comments`);
    }
    
    create(post: Post): Promise<Post> {
        return this.axios.$post<Post>(
            `${this.apiUrl}/posts`, 
            JSON.stringify({ 
                title: post.title, 
                body: post.body, 
                userId: post.userId 
            }), 
            headers) ; 
    }
    
    update(id: number, post: Post): Promise<Post> {
        return this.axios.$put<Post>(
            `${this.apiUrl}/posts/${id}`, 
            JSON.stringify({ 
                id,
                title: post.title, 
                body: post.body, 
                userId: post.userId 
            }), 
            headers); 
    }
    
    patch(id: number, data: { title: string; body: string; }): Promise<Post> {
        return this.axios.$patch<Post>(`${this.apiUrl}/posts/${id}`, JSON.stringify(data), headers); 
    }
    
    delete(id: number): Promise<Post> {
        return this.axios.$delete<Post>(`${this.apiUrl}/posts/${id}`); 
    }

}