import { AxiosInstance } from "axios";
import { QueryParams } from "./type";
export declare class GameApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    listTemplateGames(): Promise<any>;
    listMyGames(pagination?: QueryParams): Promise<any>;
}
