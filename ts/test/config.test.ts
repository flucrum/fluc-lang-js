import * as assert from "assert";
import * as config from "../src/config";
import * as path from "path";

describe("loadFromFile", () => {
    it("Test load config", () => {
        const configFile = config.loadFromFile(path.resolve(__dirname, "test-files/config.json"));
        assert.equal(configFile.tokenDefsFilePaths, ".");
    });
});