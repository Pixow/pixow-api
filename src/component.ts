import { AxiosInstance } from "axios";
import { stringify } from "qs";
import { Pagination } from "./type";

export enum ComponentVisibility {
  PUBLIC = "Public",
  PRIVATE = "Private",
}

export enum ComponentType {
  All = "",
  Element = "ElementNode",
  Terrain = "TerrainNode",
  CustomFeaturePack = "CustomNode", // 自定义功能包
  Effect = "EffectNode",
}

export interface ComponentQuery {
  type: ComponentType;
  keyword: string;
  tags: string[];
  visibility: ComponentVisibility;
}

export class ComponentApi {
  constructor(private _axios: AxiosInstance) {}

  public listMarketComponents(
    pagination: Pagination = { page: 1, pageSize: 20 },
    query: ComponentQuery = { type: ComponentType.All, keyword: "", tags: [], visibility: ComponentVisibility.PUBLIC }
  ) {
    const q = Object.assign(pagination, query);

    return this._axios.get(`/component/list?${stringify(q)}`);
  }
}
