"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(tokens) {
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
exports.run = run;
