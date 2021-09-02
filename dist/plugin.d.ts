import { AxiosInstance } from "axios";
export interface UpdatePluginDto {
    name?: string;
    description?: string;
    status?: Number;
    author?: string;
    version?: string;
    icon?: string;
}
export interface CreatePluginDto {
    name: string;
    description: string;
    version: string;
    author: string;
    icon?: string;
}
export declare class PluginApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    createPlugin(data: CreatePluginDto): Promise<any>;
    updatePlugin(pluginName: string, updateDto: UpdatePluginDto): Promise<any>;
    listPlugins(): Promise<any>;
    getPlugin(pluginName: string): Promise<any>;
}
