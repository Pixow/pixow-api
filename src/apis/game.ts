import { AxiosInstance } from "axios";
import { plainToClass } from "class-transformer";
import * as qs from "qs";
import { QueryParams } from "../models/global.model";
import { SdkClient } from "../common/sdkclient";
import { Game } from "../models/game.model";

export class GameApi {
  constructor(private client: SdkClient) {}

  public listTemplateGames(): Promise<{ total: number; list: Game[] }> {
    return this.client.get("/game/list?template=true").then((res) => {
      const {code, data} = res
      const { total, list } = data;
      const rets = list.map((item) => plainToClass(Game, item));

      return {
        total,
        list: rets,
      };
    });
  }

  public listMyGames(
    pagination: QueryParams = { page: 1, pageSize: 20 }
  ): Promise<{ total: number; list: Game[] }> {
    const q = qs.stringify(pagination);
    return this.client.get(`/game/mine?${q}`).then((res) => {
      const {code, data} = res;
      const { total, list } = data;
      const rets = list.map((item) => plainToClass(Game, item));
      return {
        total,
        list: rets,
      };
    });
  }
}
