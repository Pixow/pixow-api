import { AxiosInstance } from "axios";
import { plainToClass } from "class-transformer";
import { Plugin } from "src";
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
  name: string;
  description: string;
  version: string;
  author: string;
  icon?: string;
}

export class PluginApi {
  constructor(private client: SdkClient) {}

  public createPlugin(data: CreatePluginDto): Promise<any> {
    return this.client.post("/plugin/create", data);
  }

  public updatePlugin(
    pluginName: string,
    updateDto: UpdatePluginDto
  ): Promise<any> {
    return this.client.put(`/plugin/update/${pluginName}`, updateDto);
  }

  public listPlugins(): Promise<{total: number, list: Plugin[]}> {
    return this.client.get(`/plugin/list`).then(res => {
      const {total, list} = res;
      const rets = list.map((item) => plainToClass(Plugin, item));
      return {
        total,
        list: rets
      }
    })
  }

  public getPlugin(pluginName: string): Promise<Plugin> {
    return this.client.get(`/plugin/list?name=${pluginName}`).then(res => plainToClass(Plugin, res.data))
  }
}
