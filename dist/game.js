"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameApi = void 0;
var qs_1 = require("qs");
var GameApi = /** @class */ (function () {
    function GameApi(_axios) {
        this._axios = _axios;
    }
    GameApi.prototype.listTemplateGames = function () {
        return this._axios.get("/game/list?template=true");
    };
    GameApi.prototype.listMyGames = function (pagination) {
        if (pagination === void 0) { pagination = { page: 1, pageSize: 20 }; }
        var q = qs_1.stringify(pagination);
        return this._axios.get("/game/mine?" + q);
    };
    return GameApi;
}());
exports.GameApi = GameApi;
//# sourceMappingURL=game.js.map