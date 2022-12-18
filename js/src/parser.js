"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLines = void 0;
var replaceTabsAndSpaces = require("./parser/replace-tabs-and-spaces");
var splitToLines = require("./parser/split-to-lines");
var cascadeLines = require("./parser/cascade-lines");
function reType(tokens) {
    return tokens;
}
function parseLines(tokens) {
    var tokensWithoutTabs = replaceTabsAndSpaces.run(reType(tokens));
    var lines = splitToLines.run(tokensWithoutTabs);
    return cascadeLines.run(lines);
}
exports.parseLines = parseLines;
