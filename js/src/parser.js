"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLines = void 0;
function reType(tokens) {
    return tokens;
}
function parseLines(tokens) {
    var tokensWithoutTabs = replaceTabsAndSpaces(reType(tokens));
    var lines = splitToLines(tokensWithoutTabs);
    return cascadeLines(lines);
}
exports.parseLines = parseLines;
function replaceTabsAndSpaces(tokens) {
    var result = [];
    tokens.forEach(function (el) {
        if (el.name === 'tab') {
            for (var i = 0; i < 4 * el.val.length; i++) {
                result.push({
                    name: "space",
                    val: " ",
                    pos: el.pos,
                });
            }
        }
        else if (el.name === 'space') {
            for (var i = 0; i < el.val.length; i++) {
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
            lines.push({ cascade: 0, tokens: curLine, });
            curLine = [];
        }
        else {
            curLine.push(el);
        }
    });
    if (curLine.length !== 0) {
        lines.push({ cascade: 0, tokens: curLine, });
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
        var tokens = [];
        for (var i = spaces; i < tokensLength; i++) {
            tokens.push(el.tokens[i]);
        }
        return {
            tokens: tokens,
            cascade: spaces,
        };
    });
}
//export function splitPhrases(tokens: Array<lexerModule.FlucToken>): Array<Phrase>
//{
//    
//}
