import { AxiosInstance } from "axios";
import { QueryParams } from "./type";
export declare enum ComponentVisibility {
    PUBLIC = "Public",
    PRIVATE = "Private"
}
export declare enum ComponentType {
    All = "",
    Element = "ElementNode",
    Terrain = "TerrainNode",
    CustomNode = "CustomNode",
    Effect = "EffectNode"
}
export interface ComponentQuery {
    type?: ComponentType;
    keyword: string;
    tags: string[];
    visibility?: ComponentVisibility;
}
export declare class ComponentApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    listMarketComponents(pagination?: QueryParams, query?: ComponentQuery): Promise<any>;
    listMyComponents(pagination?: QueryParams, query?: ComponentQuery): Promise<any>;
    listMarketCustomNodes(pagination?: QueryParams, query?: ComponentQuery): Promise<any>;
    listMyCustomNodes(pagination?: QueryParams, query?: ComponentQuery): Promise<any>;
}
