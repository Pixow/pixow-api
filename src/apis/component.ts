import { AxiosInstance } from "axios";
import * as qs from "qs";
import { QueryParams } from "src";
import { SdkClient } from "../common/sdkclient";

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
  constructor(private client: SdkClient) {}

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

    return this.client.get(`/component/list?${qs.stringify(q)}`)
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

    return this.client.get(`/component/mine?${qs.stringify(q)}`)
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

    return this.client.get(`/component/list?${qs.stringify(q)}`)
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

    return this.client.get(`/component/mine?${qs.stringify(q)}`)
  }
}
