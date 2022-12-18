"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertModule = require("assert");
var lexerModule = require("../src/lexer");
var parserModule = require("../src/parser");
var pathModule = require("path");
var fsModule = require("fs");
var lexer = lexerModule.parseLoadFromConfig(pathModule.resolve(__dirname, "../../lexics/config.json"));
describe("Test syntax", function () {
    describe("nominal 1", function () {
        it("test lexer", function () {
            var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/phrase.fluc"), "utf8");
            var resultTokens = lexerModule.analyzeText(text, lexer);
            var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/tokens.json"), "utf8"));
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
        it("test parser", function () {
            var tokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/tokens.json"), "utf8"));
            var resultLines = parserModule.parseLines(tokens);
            var nominalLines = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/lines.json"), "utf8"));
            assertModule.deepEqual(nominalLines, resultLines);
        });
    });
    describe("nominal 2", function () {
        it("test lexer", function () {
            var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/phrase.fluc"), "utf8");
            var resultTokens = lexerModule.analyzeText(text, lexer);
            var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/tokens.json"), "utf8"));
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
    });
    describe("nominal 3", function () {
        it("test lexer", function () {
            var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/3/phrase.fluc"), "utf8");
            var resultTokens = lexerModule.analyzeText(text, lexer);
            var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/3/tokens.json"), "utf8"));
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
    });
    describe("nominal 4", function () {
        it("test lexer", function () {
            var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/4/phrase.fluc"), "utf8");
            var resultTokens = lexerModule.analyzeText(text, lexer);
            var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/4/tokens.json"), "utf8"));
            assertModule.deepEqual(nominalTokens, resultTokens);
        });
    });
});
