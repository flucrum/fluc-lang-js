import * as assertModule from "assert";
import * as lexerModule from "../src/lexer";
import * as parserModule from "../src/parser";
import * as pathModule from "path";
import * as fsModule from "fs";

const lexer = lexerModule.parseLoadFromConfig(pathModule.resolve(__dirname, "../../lexics/config.json"));

describe("Test syntax", () => {
    describe("nominal 1", () => {
        it("test lexer", () => {
            let text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/phrase.fluc"), "utf8");
            let resultTokens = lexerModule.analyzeText(text, lexer);
            let nominalTokens = JSON.parse(
                fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/tokens.json"), "utf8")
            );
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
        
        it("test parser", () => {
            let tokens = JSON.parse(
                fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/tokens.json"), "utf8")
            );
    
            let resultLines = parserModule.parseLines(tokens);
            let nominalLines = JSON.parse(
                fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/lines.json"), "utf8")
            );
            assertModule.deepEqual(nominalLines, resultLines);
        });
    });

    describe("nominal 2", () => {
        it("test lexer", () => {
            let text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/phrase.fluc"), "utf8");
            let resultTokens = lexerModule.analyzeText(text, lexer);
            let nominalTokens = JSON.parse(
                fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/tokens.json"), "utf8")
            );
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
    });

    describe("nominal 3", () => {
        it("test lexer", () => {
            let text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/3/phrase.fluc"), "utf8");
            let resultTokens = lexerModule.analyzeText(text, lexer);
            let nominalTokens = JSON.parse(
                fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/3/tokens.json"), "utf8")
            );
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
    });

    describe("nominal 4", () => {
        it("test lexer", () => {
            let text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/4/phrase.fluc"), "utf8");
            let resultTokens = lexerModule.analyzeText(text, lexer);
            let nominalTokens = JSON.parse(
                fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/4/tokens.json"), "utf8")
            );
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
    });
});