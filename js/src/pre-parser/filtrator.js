"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeComments = exports.removeSpaces = void 0;
function removeSpaces(lines) {
    return filterTokens(lines, spaces);
}
exports.removeSpaces = removeSpaces;
function removeComments(lines) {
    return filterTokens(lines, comments);
}
exports.removeComments = removeComments;
function filterTokens(lines, fn) {
    return lines.map(function (el) {
        return {
            cascade: el.cascade,
            tokens: el.tokens.filter(function (el) { return fn(el); }),
        };
    });
}
function spaces(token) {
    return token.name !== "space";
}
function comments(token) {
    return token.name !== "inline-comment";
}
