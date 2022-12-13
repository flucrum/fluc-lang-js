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
describe("Test analizing text", function () {
    it("test correct text analyzing", function () {
        var text = "fun :=  x, y -> x + y";
        var lexer = {
            tokenDefs: [
                { name: "math", regExp: "[+\\-\\\\*]" },
                { name: "arrow", regExp: "->" },
                { name: "symbol", regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*" },
                { name: "def", regExp: ":=" },
                { name: "space", regExp: "\\s+" },
                { name: "subdot", regExp: "," },
            ]
        };
        var resultTokens = lexerModule.analyzeText(text, lexer);
        var nominal = [
            {
                name: "symbol",
                regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*",
                pos: 0,
                val: "fun",
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 3,
                val: " ",
            },
            {
                name: "def",
                regExp: ":=",
                pos: 4,
                val: ":=",
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 6,
                val: "  ",
            },
            {
                name: "symbol",
                regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*",
                pos: 8,
                val: "x",
            },
            {
                name: "subdot",
                regExp: ",",
                pos: 9,
                val: ",",
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 10,
                val: " ",
            },
            {
                name: "symbol",
                regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*",
                pos: 11,
                val: "y",
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 12,
                val: " ",
            },
            {
                name: "arrow",
                regExp: "->",
                pos: 13,
                val: "->",
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 15,
                val: " ",
            },
            {
                name: "symbol",
                regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*",
                pos: 16,
                val: 'x',
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 17,
                val: " ",
            },
            {
                name: "math",
                regExp: "[+\\-\\\\*]",
                pos: 18,
                val: '+',
            },
            {
                name: "space",
                regExp: "\\s+",
                pos: 19,
                val: " ",
            },
            {
                name: "symbol",
                regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*",
                pos: 20,
                val: 'y',
            },
        ];
        assertModule.deepEqual(nominal, resultTokens);
    });
});
