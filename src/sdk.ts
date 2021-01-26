import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthApi } from "./auth";
import { ComponentApi } from "./component";
import { GameApi } from "./game";

export enum Environment {
  Development,
  Alpha,
  Production,
}

export interface IQingWebApiSdk {
  auth: AuthApi;
  game: GameApi;
  component: ComponentApi;

  setToken(token: string): void;
  setRequestInterceptor(
    onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected?: (error: any) => any
  ): void;
  setResponseInterceptor(
    onFulfilled?: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected?: (error: any) => any
  ): void;

  req(request: any): void;
}

export class QingWebApiSdk implements IQingWebApiSdk {
  private env: Environment;
  private _baseUrl: string;
  private _axios: AxiosInstance;

  constructor(env: Environment) {
    this.env = env;

    if (env === Environment.Development) {
      this._baseUrl = "http://172.18.0.100:17170";
    } else if (env === Environment.Alpha) {
      this._baseUrl = "https://api-dev.tooqing.com";
    } else {
      this._baseUrl = "https://api.tooqing.com";
    }

    this._axios = axios.create({
      baseURL: this._baseUrl,
    });

    this._auth = new AuthApi(this._axios);
    this._game = new GameApi(this._axios);
    this._component = new ComponentApi(this._axios);
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

  public setToken(token: string): void {
    this._axios.defaults.headers.common["X-Pixelpai-TK"] = token;
  }

  public setRequestInterceptor(
    onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    onRejected?: (error: any) => any
  ) {
    this._axios.interceptors.request.use(onFulfilled, onRejected);
  }

  public setResponseInterceptor(
    onFulfilled?: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    onRejected?: (error: any) => any
  ) {
    this._axios.interceptors.response.use(onFulfilled, onRejected);
  }

  public req(request: any) {
    this._axios(request);
  }
}
