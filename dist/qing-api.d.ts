import "reflect-metadata";
import { AuthApi } from "./apis/auth";
import { AvatarApi } from "./apis/avatar";
import { Configuration } from "./common/configuration";
import { ComponentApi } from "./apis/component";
import { GameApi } from "./apis/game";
import { PluginApi } from "./apis/plugin";
import { UtilApi } from "./apis/util";
export default class QingApi {
    private _client;
    auth: AuthApi;
    game: GameApi;
    component: ComponentApi;
    plugin: PluginApi;
    util: UtilApi;
    avatar: AvatarApi;
    constructor(configuration: Configuration);
    setToken(token: string): void;
}
