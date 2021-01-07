import { AxiosInstance } from "axios";
export interface Pagination {
    page: number;
    pageSize: number;
}
export declare class GameApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    listTemplateGames(): Promise<any>;
    listMyGames(pagination?: Pagination): Promise<import("axios").AxiosResponse<any>>;
}
