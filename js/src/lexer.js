"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeText = exports.parseLoadFromConfig = void 0;
var assertModule = require("assert");
var configModule = require("./config");
var tokenLoaderModule = require("./lexer/token-loader");
function parseLoadFromConfig(configPath, coding) {
    if (coding === void 0) { coding = 'utf8'; }
    var config = configModule.loadFromFile(configPath);
    var tokenDefs = tokenLoaderModule.load(configPath, config.tokenDefsFilePaths);
    return { tokenDefs: tokenDefs };
}
exports.parseLoadFromConfig = parseLoadFromConfig;
function analyzeText(str, lexer, maxIterationsGuargInt) {
    if (maxIterationsGuargInt === void 0) { maxIterationsGuargInt = 100000; }
    var maxTokenLength = lexer.tokenDefs
        .map(function (val) { return val.regExp.length; })
        .reduce(function (prev, cur) { return Math.max(prev, cur); });
    var tokensResult = [];
    var _loop_1 = function (i) {
        if (str.length === 0) {
            return "break";
        }
        var availableTokens = lexer.tokenDefs
            .filter(function (t) { return str.search(new RegExp('^' + t.regExp)) === 0; });
        if (availableTokens.length > 1) {
            var maxTokenPhrasLen_1 = availableTokens
                .map(function (t) { return (new RegExp("^" + t.regExp)).exec(str)[0].length; })
                .reduce(function (prev, cur) { return Math.max(prev, cur); });
            availableTokens = availableTokens
                .filter(function (t) { return (new RegExp("^" + t.regExp)).exec(str)[0].length === maxTokenPhrasLen_1; });
        }
        var tokensToReportStr = (availableTokens.length > 0)
            ? availableTokens
                .map(function (t) { return t.name; })
                .reduce(function (prev, cur) { return prev + ", " + cur; })
            : '';
        assertModule.ok(availableTokens.length === 1, "Phrase '" + str.slice(0, maxTokenLength)
            + "...' must be parsed by only 1 token-def, find " + availableTokens.length + " tokens: " + tokensToReportStr);
        var avTok = availableTokens[0];
        var flucToken = {
            name: avTok.name,
            pos: (tokensResult.length > 0)
                ? tokensResult
                    .map(function (ft) { return ft.val.length; })
                    .reduce(function (prev, cur) { return prev + cur; })
                : 0,
            val: (new RegExp('^' + avTok.regExp)).exec(str)[0],
        };
        tokensResult.push(flucToken);
        str = str.slice(flucToken.val.length);
    };
    for (var i = 0; i < maxIterationsGuargInt; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return tokensResult;
}
exports.analyzeText = analyzeText;
