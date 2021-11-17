import { AxiosInstance } from "axios";
import { plainToClass } from "class-transformer";
import { PluginRecord } from "../models/plugin.model";
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

  public listPlugins(): Promise<{ total: number; list: PluginRecord[] }> {
    return this.client.get(`/plugin/list`).then((res) => {
      const { code, data } = res;
      const { total, list } = data;
      const rets = list.map((item) => plainToClass(PluginRecord, item));
      return {
        total,
        list: rets,
      };
    });
  }

  public getPlugin(pid: string): Promise<PluginRecord> {
    return this.client.get(`/plugin/list?pid=${pid}`).then((res) => {
      const { code, data } = res;
      const { total, list } = data;
      return plainToClass(PluginRecord, list[0])
    });
  }
}
