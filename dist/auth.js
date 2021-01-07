"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApi = void 0;
var AuthApi = /** @class */ (function () {
    function AuthApi(_axios) {
        this._axios = _axios;
    }
    AuthApi.prototype.editorSignin = function (account, password) {
        return this._axios.post("/account/editor_signin", {
            account: account,
            password: password,
        });
    };
    AuthApi.prototype.refreshToken = function (token, refreshToken) {
        return this._axios.post("/account/refresh_token", {
            token: token,
            refreshToken: refreshToken,
        });
    };
    return AuthApi;
}());
exports.AuthApi = AuthApi;
//# sourceMappingURL=auth.js.map