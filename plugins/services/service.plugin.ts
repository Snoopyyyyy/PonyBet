import { Plugin } from '@nuxt/types';
import { ICommentService } from './core/ICommentService';
import { IPostService } from './core/IPostService';
import { IBetService } from './core/IBetService';
import { IPonyService } from './core/IPonyService';
import FakePonyService from './fake/FakePonyService';
import FakeBetService from './fake/FakeBetService';
import ApiPostService from './api/ApiPostService';
import ApiCommentService from './api/ApiCommentService';

const API = 'https://jsonplaceholder.typicode.com/';

declare module '@nuxt/types' {
	interface Context {
		serviceManager: {
			ponyService: IPonyService
			betService: IBetService
			postService: IPostService
			commentService: ICommentService
		}
	}
}

const serviceManager: Plugin = ({ $axios }, inject) => {
	const services: {
		ponyService: IPonyService
		betService: IBetService
		postService: IPostService
		commentService: ICommentService
	} = {
		ponyService: new FakePonyService(),
		betService: new FakeBetService(),
		postService: new ApiPostService(API, $axios),
		commentService: new ApiCommentService(API, $axios),
	};

	inject('serviceManager', services);
}


export default serviceManager;