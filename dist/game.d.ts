import { AxiosInstance } from "axios";
import { Pagination } from "./type";
export declare class GameApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    listTemplateGames(): Promise<any>;
    listMyGames(pagination?: Pagination): Promise<any>;
}
