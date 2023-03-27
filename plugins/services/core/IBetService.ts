import { Bet, Pony } from "~/plugins/models";

export interface IBetService {
    getAll(): Promise<Bet[]>;
    getByPony(pony: Pony): Promise<Bet[]>;
    create(bet: Bet): Promise<Bet>;
    read(id: string): Promise<Bet>;
}