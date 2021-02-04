import { AxiosInstance } from "axios";
import { Pagination } from "./type";
export declare enum ComponentVisibility {
    PUBLIC = "Public",
    PRIVATE = "Private"
}
export declare enum ComponentType {
    All = "",
    Element = "ElementNode",
    Terrain = "TerrainNode",
    CustomFeaturePack = "CustomNode",
    Effect = "EffectNode"
}
export interface ComponentQuery {
    type: ComponentType;
    keyword: string;
    tags: string[];
    visibility: ComponentVisibility;
}
export declare class ComponentApi {
    private _axios;
    constructor(_axios: AxiosInstance);
    listMarketComponents(pagination?: Pagination, query?: ComponentQuery): Promise<import("axios").AxiosResponse<any>>;
}