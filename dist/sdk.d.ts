import { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthApi } from "./auth";
import { AvatarApi } from "./avatar";
import { ComponentApi } from "./component";
import { GameApi } from "./game";
import { PluginApi } from "./plugin";
import { UtilApi } from "./util";
export declare enum Environment {
    Develop = "develop",
    Release = "release",
    Production = "production"
}
export declare class QingWebApiSdk {
    private env;
    private _baseUrl;
    private _axios;
    static instance: QingWebApiSdk;
    static getInstance(): QingWebApiSdk;
    constructor(env?: Environment);
    private _auth;
    get auth(): AuthApi;
    private _game;
    get game(): GameApi;
    private _component;
    get component(): ComponentApi;
    private _plugin;
    get plugin(): PluginApi;
    private _util;
    get util(): UtilApi;
    private _avatar;
    get avatar(): AvatarApi;
    setToken(token: string): void;
    setRequestInterceptor(onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>, onRejected?: (error: any) => any): void;
    setResponseInterceptor(onFulfilled?: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>, onRejected?: (error: any) => any): void;
    req(request: any): void;
}
