"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(lines) {
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
exports.run = run;
