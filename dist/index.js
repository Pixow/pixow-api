import axios from 'axios';
import { stringify } from 'qs';

class AuthApi {
    constructor(_axios) {
        this._axios = _axios;
    }
    editorSignin(account, password) {
        return this._axios.post("/account/editor_signin", {
            account,
            password,
        });
    }
    refreshToken(token, refreshToken) {
        return this._axios.post("/account/refresh_token", {
            token,
            refreshToken,
        });
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
    constructor(_axios) {
        this._axios = _axios;
    }
    listMarketComponents(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: `-${ComponentType.CustomNode}`,
            visibility: ComponentVisibility.PUBLIC,
        });
        return this._axios.get(`/component/list?${stringify(q)}`);
    }
    listMyComponents(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: `-${ComponentType.CustomNode}`,
            visibility: ComponentVisibility.PRIVATE,
        });
        return this._axios.get(`/component/mine?${stringify(q)}`);
    }
    listMarketCustomNodes(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: ComponentType.CustomNode,
            visibility: ComponentVisibility.PUBLIC,
        });
        return this._axios.get(`/component/list?${stringify(q)}`);
    }
    listMyCustomNodes(pagination = { page: 1, pageSize: 20 }, query = {
        keyword: "",
        tags: [],
    }) {
        const q = Object.assign(pagination, query, {
            type: ComponentType.CustomNode,
            visibility: ComponentVisibility.PRIVATE,
        });
        return this._axios.get(`/component/mine?${stringify(q)}`);
    }
}

class GameApi {
    constructor(_axios) {
        this._axios = _axios;
    }
    listTemplateGames() {
        return this._axios.get("/game/list?template=true");
    }
    listMyGames(pagination = { page: 1, pageSize: 20 }) {
        const q = stringify(pagination);
        return this._axios.get(`/game/mine?${q}`);
    }
}

class PluginApi {
    constructor(_axios) {
        this._axios = _axios;
    }
    createPlugin(data) {
        return this._axios.post("/plugin/create", data);
    }
    updatePlugin(pluginId, updateDto) {
        return this._axios.post(`/plugin/update/${pluginId}`, updateDto);
    }
    listPlugins() {
        return this._axios.get(`/plugin/list`);
    }
    getPlugin(pluginName) {
        return this._axios.get(`/plugin/list?name=${pluginName}`);
    }
}

class UtilApi {
    constructor(_axios) {
        this._axios = _axios;
    }
    getQiniuToken(data) {
        return this._axios.post("/qiniu_token", data);
    }
}

var Environment;
(function (Environment) {
    Environment[Environment["Development"] = 0] = "Development";
    Environment[Environment["Alpha"] = 1] = "Alpha";
    Environment[Environment["Production"] = 2] = "Production";
})(Environment || (Environment = {}));
class QingWebApiSdk {
    constructor(env) {
        this.env = env;
        if (env === Environment.Development) {
            this._baseUrl = "http://172.18.0.100:17170";
        }
        else if (env === Environment.Alpha) {
            this._baseUrl = "https://api-dev.tooqing.com";
        }
        else {
            this._baseUrl = "https://api.tooqing.com";
        }
        this._axios = axios.create({
            baseURL: this._baseUrl,
        });
        this._auth = new AuthApi(this._axios);
        this._game = new GameApi(this._axios);
        this._component = new ComponentApi(this._axios);
        this._plugin = new PluginApi(this._axios);
        this._util = new UtilApi(this._axios);
    }
    get auth() {
        return this._auth;
    }
    get game() {
        return this._game;
    }
    get component() {
        return this._component;
    }
    get plugin() {
        return this._plugin;
    }
    get util() {
        return this._util;
    }
    setToken(token) {
        this._axios.defaults.headers.common["X-Pixelpai-TK"] = token;
    }
    setRequestInterceptor(onFulfilled, onRejected) {
        this._axios.interceptors.request.use(onFulfilled, onRejected);
    }
    setResponseInterceptor(onFulfilled, onRejected) {
        this._axios.interceptors.response.use(onFulfilled, onRejected);
    }
    req(request) {
        this._axios(request);
    }
}

export { AuthApi, ComponentApi, ComponentType, ComponentVisibility, Environment, GameApi, PluginApi, QingWebApiSdk };
