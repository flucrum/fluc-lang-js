import * as assertModule from "assert";
import * as lexerModule from "../src/lexer";
import * as pathModule from "path";
import * as tokenDefModule from "../src/lexer/token-def";

describe("function parseLoadFromConfig", () => {
    it("test load real config", () => {
        let lexer = lexerModule
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

describe("Test analizing text", () => {
    it("test correct text analyzing", () => {
        let text = "fun :=  x, y -> x + y";
        let lexer: lexerModule.FlucLangLexer = {
            tokenDefs: [
                { name: "math", regExp: "[+\\-\\\\*]" },
                { name: "arrow", regExp: "->" },
                { name: "symbol", regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*" },
                { name: "def", regExp: ":="},
                { name: "space", regExp: "\\s+"},
                { name: "subdot", regExp: ","},
            ]
        };
        let resultTokens = lexerModule.analyzeText(text, lexer);
        let nominal: Array<lexerModule.FlucToken> = [
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
        ]
        assertModule.deepEqual(nominal, resultTokens);
    });
});