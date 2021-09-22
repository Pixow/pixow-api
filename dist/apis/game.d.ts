import { QueryParams } from "../models/global.model";
import { SdkClient } from "../common/sdkclient";
import { Game } from "../models/game.model";
export declare class GameApi {
    private client;
    constructor(client: SdkClient);
    listTemplateGames(): Promise<{
        total: number;
        list: Game[];
    }>;
    listMyGames(pagination?: QueryParams): Promise<{
        total: number;
        list: Game[];
    }>;
}
