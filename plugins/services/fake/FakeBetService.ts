import { IBetService } from '../core/IBetService';
import { Bet, Pony } from '~/plugins/models';

export default class FakeBetService implements IBetService {
    bets: Bet[];
    id: number;

    constructor() {
        this.bets = [];
        this.id = 1;
    }

    getAll(): Promise<Bet[]> {
        return new Promise((resolve) => {
            resolve([...this.bets])
        })
    }
    
    getByPony(pony: Pony): Promise<Bet[]> {
        return new Promise((resolve) => {
            resolve(this.bets.filter(b => b.ponies.find(p => p.id === pony.id)))
        })
    }
    
    create(bet: Bet): Promise<Bet> {
        return new Promise((resolve) => {
            bet.id = (this.id++).toString();
            this.bets.push(bet);
            resolve(bet);
        })
    }
    
    read(id: string): Promise<Bet> {
        return new Promise((resolve, reject) => {
            const bet = this.bets.find(b => b.id === id);
            if(bet) {
                resolve(bet)
            }else{
                reject(new Error("404 not found"));
            }
        });
    }
}