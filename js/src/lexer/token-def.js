"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkType = void 0;
function checkType(x) {
    return (typeof x === "object")
        && (x.hasOwnProperty('name'))
        && (x.hasOwnProperty('regExp'));
}
exports.checkType = checkType;
