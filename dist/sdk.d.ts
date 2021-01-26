import { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthApi } from "./auth";
import { ComponentApi } from "./component";
import { GameApi } from "./game";
export declare enum Environment {
    Development = 0,
    Alpha = 1,
    Production = 2
}
export interface IQingWebApiSdk {
    auth: AuthApi;
    game: GameApi;
    component: ComponentApi;
    setToken(token: string): void;
    setRequestInterceptor(onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>, onRejected?: (error: any) => any): void;
    setResponseInterceptor(onFulfilled?: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>, onRejected?: (error: any) => any): void;
    req(request: any): void;
}
export declare class QingWebApiSdk implements IQingWebApiSdk {
    private env;
    private _baseUrl;
    private _axios;
    constructor(env: Environment);
    private _auth;
    get auth(): AuthApi;
    private _game;
    get game(): GameApi;
    private _component;
    get component(): ComponentApi;
    setToken(token: string): void;
    setRequestInterceptor(onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>, onRejected?: (error: any) => any): void;
    setResponseInterceptor(onFulfilled?: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>, onRejected?: (error: any) => any): void;
    req(request: any): void;
}
