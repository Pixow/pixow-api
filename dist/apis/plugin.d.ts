import { Plugin } from "../models/plugin.model";
import { SdkClient } from "../common/sdkclient";
export interface UpdatePluginDto {
    name?: string;
    description?: string;
    status?: Number;
    author?: string;
    version?: string;
    icon?: string;
}
export interface CreatePluginDto {
    pid: string;
    name: string;
    description: string;
    version: string;
    author: string;
    icon?: string;
}
export declare class PluginApi {
    private client;
    constructor(client: SdkClient);
    createPlugin(data: CreatePluginDto): Promise<any>;
    updatePlugin(pluginName: string, updateDto: UpdatePluginDto): Promise<any>;
    listPlugins(): Promise<{
        total: number;
        list: Plugin[];
    }>;
    getPlugin(pid: string): Promise<Plugin>;
}
