"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(tokens) {
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
exports.run = run;
