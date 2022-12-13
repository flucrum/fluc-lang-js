"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLoadFromConfig = void 0;
var configModule = require("./config");
var tokenLoaderModule = require("./lexer/token-loader");
function parseLoadFromConfig(configPath, coding) {
    if (coding === void 0) { coding = 'utf8'; }
    var config = configModule.loadFromFile(configPath);
    var tokenDefs = tokenLoaderModule.load(configPath, config.tokenDefsFilePaths);
    return { tokenDefs: tokenDefs };
}
exports.parseLoadFromConfig = parseLoadFromConfig;
