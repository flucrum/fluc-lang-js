"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLines = void 0;
var replaceTabsAndSpacesModule = require("./parser/replace-tabs-and-spaces");
var splitToLinesModule = require("./parser/split-to-lines");
var cascadeLinesModule = require("./parser/cascade-lines");
var removeSpacesModule = require("./parser/remove-spaces");
function reType(tokens) {
    return tokens;
}
function parseLines(tokens) {
    var tokensWithoutTabs = replaceTabsAndSpacesModule.run(reType(tokens));
    var lines = splitToLinesModule.run(tokensWithoutTabs);
    var cascadedLines = cascadeLinesModule.run(lines);
    var cascadedLinesWithoutSpace = removeSpacesModule.run(cascadedLines);
    return cascadedLinesWithoutSpace;
}
exports.parseLines = parseLines;
