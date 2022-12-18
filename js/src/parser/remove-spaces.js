"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(lines) {
    return lines.map(function (el) {
        return {
            cascade: el.cascade,
            tokens: el.tokens.filter(function (el) {
                return el.name !== "space";
            }),
        };
    });
}
exports.run = run;
