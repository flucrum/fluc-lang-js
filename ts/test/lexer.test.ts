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
        let text = "fun:  x, y -> x + y";
        let lexer: lexerModule.FlucLangLexer = {
            tokenDefs: [
                { name: "math", regExp: "[+\\-\\\\*]" },
                { name: "arrow", regExp: "->" },
                { name: "symbol", regExp: "[a-zA-Z_]+[a-zA-Z_0-9]*" },
                { name: "def", regExp: ":"},
                { name: "space", regExp: "\\s+"},
                { name: "subdot", regExp: ","},
            ]
        };
        let resultTokens = lexerModule.analyzeText(text, lexer);
        let nominal: Array<lexerModule.FlucToken> = [
            {
                name: "symbol",
                pos: 0,
                val: "fun",
            },
            {
                name: "def",
                pos: 3,
                val: ":",
            },
            {
                name: "space",
                pos: 4,
                val: "  ",
            },
            {
                name: "symbol",
                pos: 6,
                val: "x",
            },
            {
                name: "subdot",
                pos: 7,
                val: ",",
            },
            {
                name: "space",
                pos: 8,
                val: " ",
            },
            {
                name: "symbol",
                pos: 9,
                val: "y",
            },
            {
                name: "space",
                pos: 10,
                val: " ",
            },
            {
                name: "arrow",
                pos: 11,
                val: "->",
            },
            {
                name: "space",
                pos: 13,
                val: " ",
            },
            {
                name: "symbol",
                pos: 14,
                val: 'x',
            },
            {
                name: "space",
                pos: 15,
                val: " ",
            },
            {
                name: "math",
                pos: 16,
                val: '+',
            }, 
            {
                name: "space",
                pos: 17,
                val: " ",
            },
            {
                name: "symbol",
                pos: 18,
                val: 'y',
            },
        ]
        assertModule.deepEqual(nominal, resultTokens);
    });
});