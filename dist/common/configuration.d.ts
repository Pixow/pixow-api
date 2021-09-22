export declare enum Area {
    CNDEV = "cn-dev",
    CN = "cn",
    OVERSEA = "oversea"
}
export interface Configuration {
    area: Area;
}
export declare const BaseURLS: {
    "cn-dev": string;
    cn: string;
    oversea: string;
};
export declare const QINGTOKENKEY = "X-Pixelpai-TK";
