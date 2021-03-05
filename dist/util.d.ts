import { AxiosInstance } from "axios";
export interface GetQiniuTokenDto {
    name: string;
}
export declare class UtilApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    getQiniuToken(data: GetQiniuTokenDto): Promise<any>;
}
