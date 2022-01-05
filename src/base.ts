import fetch from "isomorphic-unfetch";

export enum ENV {
  DEVELOP = "develop",
  PRODUCTION = "production",
}

type Config = {
  env: ENV;
};

export type Pagination = {
  page?: number;
  pageSize?: number;
};

const BASEPATHS = {
  [ENV.DEVELOP]: "https://api-dev.tooqing.com/",
  [ENV.PRODUCTION]: "https://api.tooqing.com/",
};

export abstract class Base {
  private basePath: string;
  private headers = {
    "Content-type": "application/json",
  };

  constructor(config?: Config) {
    this.basePath = config ? BASEPATHS[config.env] : BASEPATHS[ENV.DEVELOP];
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = this.basePath + endpoint;

    const config = {
      ...options,
      headers: this.headers,
    };

    return fetch(url, config).then((r) => {
      if (r.ok) {
        return r.json();
      }
      throw new Error(r.statusText);
    });
  }

  protected setTokenHeader(token: string) {
    this.headers = Object.assign(this.headers, {
      "X-Pixelpai-TK": token,
    });
  }
}
