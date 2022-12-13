"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertModule = require("assert");
var tokenLoaderModule = require("../../src/lexer/token-loader");
var pathModule = require("path");
describe("Token loader", function () {
    it("test load configs", function () {
        var tokens = tokenLoaderModule.load(pathModule.resolve(__dirname, '..'), [
            'test-files/tokens1.json',
            'test-files/tokens2.json',
        ]);
        assertModule.deepEqual([
            { name: "tok1", regExp: "asff" },
            { name: "tok2", regExp: "fa91f" },
            { name: 'tok3', regExp: 'ac8a' },
            { name: 'tok4', regExp: 'asd90a0' },
        ], tokens);
    });
});
