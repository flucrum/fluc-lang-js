"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertModule = require("assert");
var lexerModule = require("../src/lexer");
var pathModule = require("path");
var fsModule = require("fs");
var lexer = lexerModule.parseLoadFromConfig(pathModule.resolve(__dirname, "../../lexics/config.json"));
describe("Test syntax", function () {
    it("nominal1", function () {
        var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/phrase.fluc"), "utf8");
        var resultTokens = lexerModule.analyzeText(text, lexer);
        var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/tokens.json"), "utf8"));
        assertModule.deepEqual(nominalTokens, resultTokens);
    });
    it("nominal2", function () {
        var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/phrase.fluc"), "utf8");
        var resultTokens = lexerModule.analyzeText(text, lexer);
        var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/tokens.json"), "utf8"));
        assertModule.deepEqual(nominalTokens, resultTokens);
    });
    it("nominal3", function () {
        var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/3/phrase.fluc"), "utf8");
        var resultTokens = lexerModule.analyzeText(text, lexer);
        var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/3/tokens.json"), "utf8"));
        assertModule.deepEqual(nominalTokens, resultTokens);
    });
    it("nominal4", function () {
        var text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/4/phrase.fluc"), "utf8");
        var resultTokens = lexerModule.analyzeText(text, lexer);
        var nominalTokens = JSON.parse(fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/4/tokens.json"), "utf8"));
        assertModule.deepEqual(nominalTokens, resultTokens);
    });
});
