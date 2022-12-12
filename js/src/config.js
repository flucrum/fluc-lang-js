"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFromFile = void 0;
var fs = require("fs");
var assert = require("assert");
function loadFromFile(filePath, coding) {
    if (coding === void 0) { coding = 'utf8'; }
    var configFileContent = fs.readFileSync(filePath, { encoding: coding }).toString();
    assert.ok(configFileContent.length > 0);
    var configFileParsed = JSON.parse(configFileContent);
    return configFileParsed;
}
exports.loadFromFile = loadFromFile;
