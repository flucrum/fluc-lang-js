"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLoadFromConfig = exports.LuxLangLexer = void 0;
var configModule = require("./config");
var tokenLoaderModule = require("./lexer/token-loader");
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
    var tokenDefs = tokenLoaderModule.load(configPath, config.tokenDefsFilePaths);
    return new LuxLangLexer(tokenDefs);
}
exports.parseLoadFromConfig = parseLoadFromConfig;
