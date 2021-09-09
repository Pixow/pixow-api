import { AxiosInstance } from "axios";
import * as qs from "qs";
import { QueryParams } from "./type";

export enum ComponentVisibility {
  PUBLIC = "Public",
  PRIVATE = "Private",
}

export enum ComponentType {
  All = "",
  Element = "ElementNode",
  Terrain = "TerrainNode",
  CustomNode = "CustomNode", // 自定义功能包
  Effect = "EffectNode",
}

export interface ComponentQuery {
  type?: ComponentType;
  keyword: string;
  tags: string[];
  visibility?: ComponentVisibility;
}

export class ComponentApi {
  constructor(private _axios: AxiosInstance) {}

  public listMarketComponents(
    pagination: QueryParams = { page: 1, pageSize: 20 },
    query: ComponentQuery = {
      keyword: "",
      tags: [],
    }
  ) {
    const q = Object.assign(pagination, query, {
      type: `-${ComponentType.CustomNode}`,
      visibility: ComponentVisibility.PUBLIC,
    });

    return this._axios.get(`/component/list?${qs.stringify(q)}`).then(res => res.data)
  }

  public listMyComponents(
    pagination: QueryParams = { page: 1, pageSize: 20 },
    query: ComponentQuery = {
      keyword: "",
      tags: [],
    }
  ) {
    const q = Object.assign(pagination, query, {
      type: `-${ComponentType.CustomNode}`,
      visibility: ComponentVisibility.PRIVATE,
    });

    return this._axios.get(`/component/mine?${qs.stringify(q)}`).then(res => res.data)
  }

  public listMarketCustomNodes(
    pagination: QueryParams = { page: 1, pageSize: 20 },
    query: ComponentQuery = {
      keyword: "",
      tags: [],
    }
  ) {
    const q = Object.assign(pagination, query, {
      type: ComponentType.CustomNode,
      visibility: ComponentVisibility.PUBLIC,
    });

    return this._axios.get(`/component/list?${qs.stringify(q)}`).then(res => res.data)
  }

  public listMyCustomNodes(
    pagination: QueryParams = { page: 1, pageSize: 20 },
    query: ComponentQuery = {
      keyword: "",
      tags: [],
    }
  ) {
    const q = Object.assign(pagination, query, {
      type: ComponentType.CustomNode,
      visibility: ComponentVisibility.PRIVATE,
    });

    return this._axios.get(`/component/mine?${qs.stringify(q)}`).then(res => res.data)
  }
}
