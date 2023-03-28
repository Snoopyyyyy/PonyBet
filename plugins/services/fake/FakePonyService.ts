import { IPonyService } from '../core/IPonyService';
import { Pony } from '~/plugins/models';

export default class FakePonyService implements IPonyService {
    ponies: Pony[]
    id: number

    constructor() {
        this.ponies = [
            new Pony("1", "Twilight Sparkle", "#d7a5ea", 0.6),
            new Pony("2", "Pinkie Pie", "#f2bed6", 0.5),
            new Pony("3", "Rainbow Dash", "#a4dff9", 0.9),
            new Pony("4", "Rarity", "#f0f2f8", 0.4),
            new Pony("5", "Fluttershy", "#f9f3b3", 0.2),
            new Pony("6", "Applejack", "#f1bc68", 0.7)
        ]
        this.id = 7;
    }

    getAll(): Promise<Pony[]> {
        return new Promise((resolve) => {
            resolve([...this.ponies])
        })
    }

    create(pony: Pony): Promise<Pony> {
        return new Promise((resolve) => {
            pony.id = (this.id++).toString();
            this.ponies.push(pony);
            console.log("pk", this.ponies)
            resolve(pony);
        })
    }
    
    read(id: string): Promise<Pony> {
        return new Promise((resolve, reject) => {
            const pony = this.ponies.find(p => p.id === id);
            if(pony) {
                resolve(pony)
            }else{
                reject(new Error("404 not found"));
            }
        });
    }
}