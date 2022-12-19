"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLines = void 0;
var replaceTabsAndSpacesModule = require("./pre-parser/replace-tabs-and-spaces");
var splitToLinesModule = require("./pre-parser/split-to-lines");
var cascadeLinesModule = require("./pre-parser/cascade-lines");
var filtratorModule = require("./pre-parser/filtrator");
function reType(tokens) {
    return tokens;
}
function parseLines(tokens) {
    var tokensWithoutTabs = replaceTabsAndSpacesModule.run(reType(tokens));
    var lines = splitToLinesModule.run(tokensWithoutTabs);
    var cascadedLines = cascadeLinesModule.run(lines);
    var cascadedLinesWithoutSpace = filtratorModule.removeSpaces(cascadedLines);
    var cascadedLinesWithoutComments = filtratorModule.removeComments(cascadedLinesWithoutSpace);
    var pureLines = cascadedLinesWithoutComments.filter(function (el) {
        return el.tokens.length !== 0;
    });
    return pureLines;
}
exports.parseLines = parseLines;
