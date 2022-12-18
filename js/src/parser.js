"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLines = void 0;
function parseLines(tokens) {
    var tokensWithoutTabs = replaceTabs(tokens);
    var lines = splitToLines(tokensWithoutTabs);
    return cascadeLines(lines);
}
exports.parseLines = parseLines;
function replaceTabs(tokens) {
    var result = [];
    tokens.forEach(function (el) {
        if (el.name === 'tab') {
            for (var i = 0; i < 4; i++) {
                result.push({
                    name: "space",
                    val: " ",
                    pos: el.pos,
                });
            }
        }
        else {
            result.push(el);
        }
    });
    return result;
}
function splitToLines(tokens) {
    var lines = [];
    var curLine = [];
    tokens.forEach(function (el) {
        if (el.name === 'new-line') {
            lines.push({ cascadeShift: 0, tokens: curLine, });
            curLine = [];
        }
        else {
            curLine.push(el);
        }
    });
    if (curLine.length !== 0) {
        lines.push({ cascadeShift: 0, tokens: curLine, });
    }
    return lines;
}
function cascadeLines(lines) {
    return lines.map(function (el) {
        var tokensLength = el.tokens.length;
        var spaces = 0;
        for (var i = 0; i < tokensLength; i++) {
            if (el.tokens[i].name === 'space') {
                spaces++;
            }
            else {
                break;
            }
        }
        var cascades = Math.floor(spaces / 4);
        var spacesToDelete = cascades * 4;
        var tokens = [];
        for (var i = cascades * 4; i < tokensLength; i++) {
            tokens.push(el.tokens[i]);
        }
        return {
            tokens: tokens,
            cascadeShift: cascades,
        };
    });
}
//export function splitPhrases(tokens: Array<lexerModule.FlucToken>): Array<Phrase>
//{
//    
//}
