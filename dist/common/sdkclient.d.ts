import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SdkClient {
    protected client: AxiosInstance;
    constructor(baseURL?: string);
    static instance: SdkClient;
    static getInstance(baseURL: string): SdkClient;
    setToken(token: string): void;
    get(url: string, config?: AxiosRequestConfig): Promise<any>;
    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
    put(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
    delete(url: string, config?: AxiosRequestConfig): Promise<any>;
    patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
}
