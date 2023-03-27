import { Plugin } from '@nuxt/types';
import { IBetService } from './core/IBetService';
import { IPonyService } from './core/IPonyService';
import FakePonyService from './fake/FakePonyService';
import FakeBetService from './fake/FakeBetService';

declare module '@nuxt/types' {
  interface Context {
    $serviceManager: {
        ponyService: IPonyService
        betService: IBetService
    }
  }
}

const serviceManager: Plugin = (context, inject) => {
    const services: {
        ponyService: IPonyService
        betService: IBetService
    } = {
        ponyService: new FakePonyService(),
        betService: new FakeBetService()
    };

  inject('serviceManager', services);
}


export default serviceManager;