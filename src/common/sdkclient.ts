import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Area, BaseURLS, Configuration, QINGTOKENKEY } from "./configuration";

export class SdkClient {
  protected client: AxiosInstance;

  constructor(baseURL: string = BaseURLS[Area.CN]) {
    this.client = axios.create({
      baseURL,
    });
  }

  public static instance: SdkClient;
  public static getInstance(baseURL: string) {
    if (!SdkClient.instance) {
      SdkClient.instance = new SdkClient(baseURL);
    }

    return SdkClient.instance;
  }

  public setToken(token: string) {
    this.client.defaults.headers.common[QINGTOKENKEY] = token;
  }

  public get(url: string, config?: AxiosRequestConfig) {
    return this.client.get(url, config).then((res) => res.data);
  }

  public post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.post(url, data, config).then((res) => res.data);
  }

  public put(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.put(url, data, config).then((res) => res.data);
  }

  public delete(url: string, config?: AxiosRequestConfig) {
    return this.client.delete(url, config).then((res) => res.data);
  }

  public patch(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.patch(url, data, config).then((res) => res.data);
  }
}
