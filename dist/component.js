"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentApi = exports.ComponentType = exports.ComponentVisibility = void 0;
var qs_1 = require("qs");
var ComponentVisibility;
(function (ComponentVisibility) {
    ComponentVisibility["PUBLIC"] = "Public";
    ComponentVisibility["PRIVATE"] = "Private";
})(ComponentVisibility = exports.ComponentVisibility || (exports.ComponentVisibility = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType["All"] = "";
    ComponentType["Element"] = "ElementNode";
    ComponentType["Terrain"] = "TerrainNode";
    ComponentType["CustomFeaturePack"] = "CustomNode";
    ComponentType["Effect"] = "EffectNode";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
var ComponentApi = /** @class */ (function () {
    function ComponentApi(_axios) {
        this._axios = _axios;
    }
    ComponentApi.prototype.listMarketComponents = function (pagination, query) {
        if (pagination === void 0) { pagination = { page: 1, pageSize: 20 }; }
        if (query === void 0) { query = { type: ComponentType.All, keyword: "", tags: [], visibility: ComponentVisibility.PUBLIC }; }
        var q = Object.assign(pagination, query);
        return this._axios.get("/component/list?" + qs_1.stringify(q));
    };
    return ComponentApi;
}());
exports.ComponentApi = ComponentApi;
//# sourceMappingURL=component.js.map