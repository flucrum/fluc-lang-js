"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertModule = require("assert");
var lexerModule = require("../src/lexer");
var pathModule = require("path");
describe("function parseLoadFromConfig", function () {
    it("test load real config", function () {
        var lexer = lexerModule
            .parseLoadFromConfig(pathModule.resolve(__dirname, 'test-files/real-config.json'));
        assertModule.deepEqual([
            {
                "name": "tok1",
                "regExp": "asff"
            },
            {
                "name": "tok2",
                "regExp": "fa91f"
            },
            {
                "name": "tok3",
                "regExp": "ac8a"
            },
            {
                "name": "tok4",
                "regExp": "asd90a0"
            },
        ], lexer.tokenDefs);
    });
});
