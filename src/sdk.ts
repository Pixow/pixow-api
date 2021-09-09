import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthApi } from "./auth";
import { AvatarApi } from "./avatar";
import { ComponentApi } from "./component";
import { GameApi } from "./game";
import { PluginApi } from "./plugin";
import { UtilApi } from "./util";

export enum Environment {
  Develop = "develop",
  Release = "release",
  Production = "production",
}

const Config = {
  [Environment.Develop]: "http://172.18.0.100:17180",
  [Environment.Release]: "https://api-dev.tooqing.com",
  [Environment.Production]: "https://api.tooqing.com",
};

export class QingWebApiSdk {
  private env: Environment;
  private _baseUrl: string;
  private _axios: AxiosInstance;

  public static instance: QingWebApiSdk;

  public static getInstance() {
    if (!QingWebApiSdk.instance) {
      QingWebApiSdk.instance = new QingWebApiSdk();
    }

    return QingWebApiSdk.instance;
  }

  constructor(env: Environment = Environment.Release) {
    this.env = env;

    this._baseUrl = Config[env];

    this._axios = axios.create({
      baseURL: this._baseUrl,
    });

    this._auth = new AuthApi(this._axios);
    this._game = new GameApi(this._axios);
    this._component = new ComponentApi(this._axios);
    this._plugin = new PluginApi(this._axios);
    this._util = new UtilApi(this._axios);
    this._avatar = new AvatarApi(this._axios);
  }

  private _auth: AuthApi;
  public get auth() {
    return this._auth;
  }

  private _game: GameApi;
  public get game() {
    return this._game;
  }

  private _component: ComponentApi;
  public get component() {
    return this._component;
  }

  private _plugin: PluginApi;
  public get plugin() {
    return this._plugin;
  }

  private _util: UtilApi;
  public get util() {
    return this._util;
  }

  private _avatar: AvatarApi;
  public get avatar() {
    return this._avatar;
  }

  public setToken(token: string): void {
    this._axios.defaults.headers.common["X-Pixelpai-TK"] = token;
  }

  public setRequestInterceptor(
    onFulfilled?: (
      value: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected?: (error: any) => any
  ) {
    this._axios.interceptors.request.use(onFulfilled, onRejected);
  }

  public setResponseInterceptor(
    onFulfilled?: (
      value: AxiosResponse<any>
    ) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected?: (error: any) => any
  ) {
    this._axios.interceptors.response.use(onFulfilled, onRejected);
  }

  public req(request: any) {
    this._axios(request);
  }
}
