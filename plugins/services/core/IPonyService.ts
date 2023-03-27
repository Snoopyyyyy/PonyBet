import { Pony } from "~/plugins/models";

export interface IPonyService {
    getAll(): Promise<Pony[]>;
    create(pony: Pony): Promise<Pony>;
    read(id: string): Promise<Pony>;
}