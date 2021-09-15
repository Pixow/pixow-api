export enum Area {
  CN = "cn",
  OVERSEA = "oversea",
}

export interface Configuration {
  area: Area;
}

export const BaseURLS = {
  [Area.CN]: "https://api.tooqing.com",
  [Area.OVERSEA]: "https://api.picatown.world",
};

export const QINGTOKENKEY = "X-Pixelpai-TK";
