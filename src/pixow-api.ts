import "reflect-metadata";

import { AuthApi } from "./apis/auth";
import { AvatarApi } from "./apis/avatar";
import { SdkClient } from "./common/sdkclient";
import { BaseURLS, Configuration } from "./common/configuration";
import { ComponentApi } from "./apis/component";
import { GameApi } from "./apis/game";
import { PluginApi } from "./apis/plugin";
import { UtilApi } from "./apis/util";

export default class PixowApi {
  private _client: SdkClient;

  public auth: AuthApi;
  public game: GameApi;
  public component: ComponentApi;
  public plugin: PluginApi;
  public util: UtilApi;
  public avatar: AvatarApi;

  constructor(configuration: Configuration) {
    this._client = SdkClient.getInstance(BaseURLS[configuration.area]);

    this.auth = new AuthApi(this._client);
    this.game = new GameApi(this._client);
    this.component = new ComponentApi(this._client);
    this.plugin = new PluginApi(this._client);
    this.util = new UtilApi(this._client);
    this.avatar = new AvatarApi(this._client);
  }

  public setToken(token: string): void {
    this._client.setToken(token);
  }
}
