"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkType = void 0;
function checkIsTokenDefPretendent(obj) {
    return (obj.hasOwnProperty('name'))
        && (obj.hasOwnProperty('regExp'));
}
function checkIsTokenDef(x) {
    return (typeof x.name === 'string')
        && (typeof x.regExp === 'string');
}
function checkType(x) {
    if (typeof x !== "object")
        return false;
    x;
    if (checkIsTokenDefPretendent(x) === false)
        return false;
    var y = x;
    return checkIsTokenDef(y);
}
exports.checkType = checkType;
