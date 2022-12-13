"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var tokenDefModule = require("./token-def");
var pathModule = require("path");
var fsModule = require("fs");
var assertModule = require("assert");
function load(configPath, tokenConfigPaths) {
    if (!fsModule.lstatSync(configPath).isDirectory) {
        configPath = pathModule.dirname(configPath);
    }
    var tokenGroups = tokenConfigPaths.map(function (tcp) {
        if (!pathModule.isAbsolute(tcp)) {
            tcp = pathModule.resolve(configPath, tcp);
        }
        var fileContent = fsModule.readFileSync(tcp, { encoding: "utf8" }).toString();
        assertModule.ok(fileContent.length > 0, "tokens file " + tcp + " is empty");
        var fileJsonParsed = JSON.parse(fileContent);
        assertModule.ok(Array.isArray(fileJsonParsed), "Expect that token-definitions file contains array, gets: " + (typeof fileJsonParsed));
        fileJsonParsed.forEach(function (i) {
            assertModule.ok(tokenDefModule.checkType(i));
        });
        fileJsonParsed;
        return fileJsonParsed;
    });
    return tokenGroups.reduce(function (prev, cur) {
        return prev.concat(cur);
    });
}
exports.load = load;
