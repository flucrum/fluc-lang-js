import * as assertModule from "assert";
import * as tokenDefModule from  "../../src/lexer/token-def";

describe("Token def assert", () => {
    it("assert available object", () => {
        let obj = {
            name: "aboba",
            regExp: "[af]*",
        };
        assertModule.ok(tokenDefModule.checkType(obj));
    });

    it("assert not available object", () => {
        let obj = {
            name: "aboba",
            subname: "[af]*",
        };
        assertModule.ok(!tokenDefModule.checkType(obj));
    })

    it("assert not object", () => {
        let obj1 = 12;
        assertModule.ok(!tokenDefModule.checkType(obj1));
        let obj2 = "aboba";
        assertModule.ok(!tokenDefModule.checkType(obj2));
    })
});