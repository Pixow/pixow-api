import { Game, QueryParams } from "src";
import { SdkClient } from "../common/sdkclient";
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
