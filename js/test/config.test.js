"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var config = require("../src/config");
var path = require("path");
describe("loadFromFile", function () {
    it("Test load config", function () {
        var configFile = config.loadFromFile(path.resolve(__dirname, "test-files/config.json"));
        assert.equal(configFile.tokenDefsFilePaths, ".");
    });
});
