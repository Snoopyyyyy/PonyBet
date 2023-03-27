import Pony from "./Pony"

export default class Bet {
    id?: string
    mise?: number
    ponies: Pony[]

    constructor(id?: string, mise?: number) {
        this.id = id;
        this.mise = mise;
        this.ponies = [];
    }

    addPony(pony: Pony) {
        this.ponies.push(pony);
    }
}