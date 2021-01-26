"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
var sdk_1 = require("./sdk");
Object.defineProperty(exports, "Environment", { enumerable: true, get: function () { return sdk_1.Environment; } });
Object.defineProperty(exports, "QingWebApiSdk", { enumerable: true, get: function () { return sdk_1.QingWebApiSdk; } });
__exportStar(require("./auth"), exports);
__exportStar(require("./game"), exports);
__exportStar(require("./component"), exports);
//# sourceMappingURL=index.js.map