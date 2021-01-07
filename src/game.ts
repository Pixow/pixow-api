import { AxiosInstance } from "axios";
import { stringify } from "qs";

export interface Pagination {
  page: number;
  pageSize: number;
}

export class GameApi {
  constructor(private _axios: AxiosInstance) {}

  public listTemplateGames(): Promise<any> {
    return this._axios.get("/game/list?template=true");
  }

  public listMyGames(pagination: Pagination = { page: 1, pageSize: 20 }) {
    const q = stringify(pagination);
    return this._axios.get(`/game/mine?${q}`);
  }
}
