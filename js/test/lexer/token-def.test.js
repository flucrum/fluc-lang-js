"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertModule = require("assert");
var tokenDefModule = require("../../src/lexer/token-def");
describe("Token def assert", function () {
    it("assert available object", function () {
        var obj = {
            name: "aboba",
            regExp: "[af]*",
        };
        assertModule.ok(tokenDefModule.checkType(obj));
    });
    it("assert not available object", function () {
        var obj = {
            name: "aboba",
            subname: "[af]*",
        };
        assertModule.ok(!tokenDefModule.checkType(obj));
    });
    it("assert not object", function () {
        var obj1 = 12;
        assertModule.ok(!tokenDefModule.checkType(obj1));
        var obj2 = "aboba";
        assertModule.ok(!tokenDefModule.checkType(obj2));
    });
});
