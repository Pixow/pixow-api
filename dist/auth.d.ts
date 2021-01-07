import { AxiosInstance } from "axios";
export interface IAuthApi {
    editorSignin(account: string, password: string): Promise<any>;
    refreshToken(token: string, refreshToken: string): Promise<any>;
}
export declare class AuthApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    editorSignin(account: string, password: string): Promise<any>;
    refreshToken(token: string, refreshToken: string): Promise<any>;
}
