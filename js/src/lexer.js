"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLoadFromConfig = exports.LuxLangLexer = void 0;
var configModule = require("./config");
var LuxLangLexer = /** @class */ (function () {
    function LuxLangLexer(tokenDefs) {
        this.tokenDefs = tokenDefs;
    }
    return LuxLangLexer;
}());
exports.LuxLangLexer = LuxLangLexer;
function parseLoadFromConfig(configPath, coding) {
    if (coding === void 0) { coding = 'utf8'; }
    var config = configModule.loadFromFile(configPath);
    return new LuxLangLexer([]);
}
exports.parseLoadFromConfig = parseLoadFromConfig;
