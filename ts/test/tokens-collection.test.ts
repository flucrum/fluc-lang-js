import * as assertModule from "assert";
import * as lexerModule from "../src/lexer";
import * as pathModule from "path";
import * as fsModule from "fs";

const lexer = lexerModule.parseLoadFromConfig(pathModule.resolve(__dirname, "../../lexics/config.json"));

describe("Test syntax", () => {
    it("nominal1", () => {
        let text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/phrase.fluc"), "utf8");
        let resultTokens = lexerModule.analyzeText(text, lexer);
        let nominalTokens = JSON.parse(
            fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/1/tokens.json"), "utf8")
        );
        assertModule.deepEqual(nominalTokens, resultTokens);
    });

    it("nominal2", () => {
        let text = fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/phrase.fluc"), "utf8");
        let resultTokens = lexerModule.analyzeText(text, lexer);
        let nominalTokens = JSON.parse(
            fsModule.readFileSync(pathModule.resolve(__dirname, "../../nominals/2/tokens.json"), "utf8")
        );
        assertModule.deepEqual(nominalTokens, resultTokens);
    });
});