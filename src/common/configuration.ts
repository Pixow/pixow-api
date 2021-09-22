export enum Area {
  CNDEV = "cn-dev",
  CN = "cn",
  OVERSEA = "oversea",
}

export interface Configuration {
  area: Area;
}

export const BaseURLS = {
  [Area.CNDEV]: "https://api-dev.tooqing.com",
  [Area.CN]: "https://api.tooqing.com",
  [Area.OVERSEA]: "https://api.picatown.world",
};

export const QINGTOKENKEY = "X-Pixelpai-TK";
