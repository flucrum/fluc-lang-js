import * as assertModule from "assert";
import * as tokenLoaderModule from  "../../src/lexer/token-loader";
import * as pathModule from "path";

describe("Token loader", () => {
    it("test load configs", () => {
        let tokens = tokenLoaderModule.load(pathModule.resolve(__dirname, '..'), [
            'test-files/tokens1.json',
            'test-files/tokens2.json',
        ])
        assertModule.deepEqual([
            { name: "tok1", regExp: "asff" },
            { name: "tok2", regExp: "fa91f" },
            { name: 'tok3', regExp: 'ac8a' },
            { name: 'tok4', regExp: 'asd90a0' },
        ], tokens);
    });
});