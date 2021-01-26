"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QingWebApiSdk = exports.Environment = void 0;
var axios_1 = require("axios");
var auth_1 = require("./auth");
var component_1 = require("./component");
var game_1 = require("./game");
var Environment;
(function (Environment) {
    Environment[Environment["Development"] = 0] = "Development";
    Environment[Environment["Alpha"] = 1] = "Alpha";
    Environment[Environment["Production"] = 2] = "Production";
})(Environment = exports.Environment || (exports.Environment = {}));
var QingWebApiSdk = /** @class */ (function () {
    function QingWebApiSdk(env) {
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
        this._axios = axios_1.default.create({
            baseURL: this._baseUrl,
        });
        this._auth = new auth_1.AuthApi(this._axios);
        this._game = new game_1.GameApi(this._axios);
        this._component = new component_1.ComponentApi(this._axios);
    }
    Object.defineProperty(QingWebApiSdk.prototype, "auth", {
        get: function () {
            return this._auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QingWebApiSdk.prototype, "game", {
        get: function () {
            return this._game;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QingWebApiSdk.prototype, "component", {
        get: function () {
            return this._component;
        },
        enumerable: false,
        configurable: true
    });
    QingWebApiSdk.prototype.setToken = function (token) {
        this._axios.defaults.headers.common["X-Pixelpai-TK"] = token;
    };
    QingWebApiSdk.prototype.setRequestInterceptor = function (onFulfilled, onRejected) {
        this._axios.interceptors.request.use(onFulfilled, onRejected);
    };
    QingWebApiSdk.prototype.setResponseInterceptor = function (onFulfilled, onRejected) {
        this._axios.interceptors.response.use(onFulfilled, onRejected);
    };
    QingWebApiSdk.prototype.req = function (request) {
        this._axios(request);
    };
    return QingWebApiSdk;
}());
exports.QingWebApiSdk = QingWebApiSdk;
//# sourceMappingURL=sdk.js.map