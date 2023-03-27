export default class Pony {
    id?: string
    name?: string
    color?: string
    odd?: number

    constructor(id?: string, name?: string, color?: string, odd?: number) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.odd = odd;
    }
}