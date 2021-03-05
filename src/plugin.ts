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

export class PluginApi {
  constructor(private _axios: AxiosInstance) {}

  public createPlugin(data: CreatePluginDto): Promise<any> {
    return this._axios.post("/plugin/create", data);
  }

  public updatePlugin(
    pluginId: string,
    updateDto: UpdatePluginDto
  ): Promise<any> {
    return this._axios.post(`/plugin/update/${pluginId}`, updateDto);
  }

  public listPlugins() {
    return this._axios.get(`/plugin/list`);
  }

  public getPlugin(pluginName: string) {
    return this._axios.get(`/plugin/list?name=${pluginName}`);
  }
}
