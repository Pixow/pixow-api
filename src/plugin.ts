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

export class PluginApi {
  constructor(private _axios: AxiosInstance) {}

  public createPlugin(data: CreatePluginDto): Promise<any> {
    return this._axios.post("/plugin/create", data).then(res => res.data)
  }

  public updatePlugin(
    pluginName: string,
    updateDto: UpdatePluginDto
  ): Promise<any> {
    return this._axios.put(`/plugin/update/${pluginName}`, updateDto).then(res => res.data)
  }

  public listPlugins() {
    return this._axios.get(`/plugin/list`).then(res => res.data)
  }

  public getPlugin(pluginName: string) {
    return this._axios.get(`/plugin/list?name=${pluginName}`).then(res => res.data)
  }
}
