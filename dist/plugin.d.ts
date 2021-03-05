import { AxiosInstance } from "axios";
export interface UpdatePluginDto {
    name?: string;
    description?: string;
    status?: Number;
    version?: string;
}
export interface CreatePluginDto {
    name: string;
    description: string;
    version: string;
}
export declare class PluginApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    createPlugin(data: CreatePluginDto): Promise<any>;
    updatePlugin(pluginId: string, updateDto: UpdatePluginDto): Promise<any>;
    listPlugins(): Promise<import("axios").AxiosResponse<any>>;
    getPlugin(pluginName: string): Promise<import("axios").AxiosResponse<any>>;
}
