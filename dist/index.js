import 'reflect-metadata';
import { stringify } from 'qs';
import { plainToClass } from 'class-transformer';
import axios from 'axios';

class AuthApi {
    constructor(client) {
        this.client = client;
    }
    editorSignin(account, password) {
        return this.client.post("/account/editor_signin", {
            account,
            password,
        });
    }
    refreshToken(token, refreshToken) {
        return this.client.post("/account/refresh_token", {
            token,
            refreshToken,
        });
    }
}

var AvatarVisibility;
(function (AvatarVisibility) {
    AvatarVisibility["PRIVATE"] = "Private";
    AvatarVisibility["PUBLIC"] = "Public";
})(AvatarVisibility || (AvatarVisibility = {}));
class Avatar {
}

class AvatarApi {
    constructor(client) {
        this.client = client;
    }
    listUserAvatars(userId, query = { page: 1, pageSize: 20 }) {
        const q = stringify(Object.assign(query, { archive: false }));
        return this.client
            .get(`/avtar/${userId}/list?${q}`)
            .then((res) => {
            const { total, list } = res.data;
            return {
                total,
                list: plainToClass(Avatar, list),
            };
        });
    }
    listAvatars(query = { page: 1, pageSize: 20 }) {
        const q = stringify(query);
        return this.client.get(`/avatar/list?${q}`).then(res => {
            const { total, list } = res.data;
            return {
                total,
                list: list.map(item => plainToClass(Avatar, item))
            };
        });
    }
    createAvatar(avatar) {
        return this.client.post("/avatar/create", avatar);
    }
    updateAvatar(id, updateDto) {
        return this.client.put(`/avatar/update/${id}`, updateDto);
    }
}

var Area;
(function (Area) {
    Area["CNDEV"] = "cn-dev";
    Area["CN"] = "cn";
    Area["OVERSEA"] = "oversea";
})(Area || (Area = {}));
const BaseURLS = {
    [Area.CNDEV]: "https://api-dev.tooqing.com",
    [Area.CN]: "https://api.tooqing.com",
    [Area.OVERSEA]: "https://api.picatown.world",
};
const QINGTOKENKEY = "X-Pixelpai-TK";

class SdkClient {
    constructor(baseURL = BaseURLS[Area.CN]) {
        this.client = axios.create({
            baseURL,
        });
    }
    static getInstance(baseURL) {
        if (!SdkClient.instance) {
            SdkClient.instance = new SdkClient(baseURL);
        }
        return SdkClient.instance;
    }
    setToken(token) {
        this.client.defaults.headers.common[QINGTOKENKEY] = token;
    }
    get(url, config) {
        return this.client.get(url, config).then((res) => res.data);
    }
    post(url, data, config) {
        return this.client.post(url, data, config).then((res) => res.data);
    }
    put(url, data, config) {
        return this.client.put(url, data, config).then((res) => res.data);
    }
    delete(url, config) {
        return this.client.delete(url, config).then((res) => res.data);
    }
    patch(url, data, config) {
        return this.client.patch(url, data, config).then((res) => res.data);
    }
}

var ComponentVisibility;
(function (ComponentVisibility) {
    ComponentVisibility["PUBLIC"] = "Public";
    ComponentVisibility["PRIVATE"] = "Private";
})(ComponentVisibility || (ComponentVisibility = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType["All"] = "";
    ComponentType["Element"] = "ElementNode";
    ComponentType["Terrain"] = "TerrainNode";
    ComponentType["CustomNode"] = "CustomNode";
    ComponentType["Effect"] = "EffectNode";
})(ComponentType || (ComponentType = {}));
class ComponentApi {
    constructor(client) {
        this.client = client;
    }
    listMarketComponents(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: `-${ComponentType.CustomNode}`,
            visibility: ComponentVisibility.PUBLIC,
        });
        return this.client.get(`/component/list?${stringify(q)}`);
    }
    listMyComponents(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: `-${ComponentType.CustomNode}`,
            visibility: ComponentVisibility.PRIVATE,
        });
        return this.client.get(`/component/mine?${stringify(q)}`);
    }
    listMarketCustomNodes(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: ComponentType.CustomNode,
            visibility: ComponentVisibility.PUBLIC,
        });
        return this.client.get(`/component/list?${stringify(q)}`);
    }
    listMyCustomNodes(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: ComponentType.CustomNode,
            visibility: ComponentVisibility.PRIVATE,
        });
        return this.client.get(`/component/mine?${stringify(q)}`);
    }
}

var Visibility;
(function (Visibility) {
    Visibility["Private"] = "Private";
    Visibility["Internal"] = "Internal";
    Visibility["Public"] = "Public";
})(Visibility || (Visibility = {}));
class GameVersion {
    constructor(init) {
        Object.assign(this, init);
    }
}
class Game {
    constructor(data) {
        Object.assign(this, data);
    }
    getUri(version) {
        // mjxmjx\game\5f1a49e2b5ad7b67aae31170\0.0.4\5f1a49e2b5ad7b67aae31170.zip
        return `${this.owner.username}/game/${this._id}/${version}/${this._id}.zip`;
    }
    get directory() {
        return `${this.owner.username}/game/${this._id}`;
    }
    get pi() {
        return `${this.directory}/${this._id}.pi`;
    }
    get package() {
        return `${this.directory}/package.json`;
    }
}

class GameApi {
    constructor(client) {
        this.client = client;
    }
    listTemplateGames() {
        return this.client.get("/game/list?template=true").then((res) => {
            const { code, data } = res;
            const { total, list } = data;
            const rets = list.map((item) => plainToClass(Game, item));
            return {
                total,
                list: rets,
            };
        });
    }
    listMyGames(pagination = { page: 1, pageSize: 20 }) {
        const q = stringify(pagination);
        return this.client.get(`/game/mine?${q}`).then((res) => {
            const { code, data } = res;
            const { total, list } = data;
            const rets = list.map((item) => plainToClass(Game, item));
            return {
                total,
                list: rets,
            };
        });
    }
}

class Plugin {
}

class PluginApi {
    constructor(client) {
        this.client = client;
    }
    createPlugin(data) {
        return this.client.post("/plugin/create", data);
    }
    updatePlugin(pluginName, updateDto) {
        return this.client.put(`/plugin/update/${pluginName}`, updateDto);
    }
    listPlugins() {
        return this.client.get(`/plugin/list`).then(res => {
            const { code, data } = res;
            const { total, list } = data;
            const rets = list.map((item) => plainToClass(Plugin, item));
            return {
                total,
                list: rets
            };
        });
    }
    getPlugin(pluginName) {
        return this.client.get(`/plugin/list?name=${pluginName}`).then(res => plainToClass(Plugin, res.data));
    }
}

class UtilApi {
    constructor(client) {
        this.client = client;
    }
    getQiniuToken(data) {
        return this.client.post("/qiniu_token", data);
    }
}

class PixowApi {
    constructor(configuration) {
        this._client = SdkClient.getInstance(BaseURLS[configuration.area]);
        this.auth = new AuthApi(this._client);
        this.game = new GameApi(this._client);
        this.component = new ComponentApi(this._client);
        this.plugin = new PluginApi(this._client);
        this.util = new UtilApi(this._client);
        this.avatar = new AvatarApi(this._client);
    }
    setToken(token) {
        this._client.setToken(token);
    }
}

class User {
}

class Component {
}

export default PixowApi;
export { Area, AuthApi, Avatar, AvatarApi, AvatarVisibility, BaseURLS, Component, ComponentApi, ComponentType, ComponentVisibility, Game, GameApi, GameVersion, Plugin, PluginApi, QINGTOKENKEY, SdkClient, User, UtilApi, Visibility };
