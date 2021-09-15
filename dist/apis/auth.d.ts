import { SdkClient } from "../common/sdkclient";
export interface IAuthApi {
    editorSignin(account: string, password: string): Promise<any>;
    refreshToken(token: string, refreshToken: string): Promise<any>;
}
export declare class AuthApi {
    private client;
    constructor(client: SdkClient);
    editorSignin(account: string, password: string): Promise<any>;
    refreshToken(token: string, refreshToken: string): Promise<any>;
}
