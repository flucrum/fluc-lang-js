import * as assertModule from "assert";
import * as lexerModule from "../src/lexer";
import * as pathModule from "path";

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