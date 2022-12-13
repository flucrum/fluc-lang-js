import * as  tokenDefModule from "./token-def";
import * as pathModule from "path";
import * as fsModule from "fs";
import * as assertModule from "assert";

export function load(configPath: string, tokenConfigPaths: string[]): Array<tokenDefModule.TokenDef> {
    if(!fsModule.lstatSync(configPath).isDirectory) {
        configPath = pathModule.dirname(configPath);
    }
    let tokenGroups = tokenConfigPaths.map((tcp: string) => {
        if(!pathModule.isAbsolute(tcp)) {
            tcp = pathModule.resolve(configPath, tcp);
        }
        let fileContent = fsModule.readFileSync(tcp, {encoding: "utf8"}).toString();
        assertModule.ok(fileContent.length > 0, "tokens file " + tcp + " is empty");
        let fileJsonParsed = JSON.parse(fileContent);
        assertModule.ok(
            Array.isArray(fileJsonParsed), 
            "Expect that token-definitions file contains array, gets: " + (typeof fileJsonParsed)
        );
        fileJsonParsed.forEach((i) => {
            assertModule.ok(tokenDefModule.checkType(i));
        });
        fileJsonParsed as Array<tokenDefModule.TokenDef>;
        return fileJsonParsed;
    });
    return tokenGroups.reduce((prev: Array<tokenDefModule.TokenDef>, cur: Array<tokenDefModule.TokenDef>): Array<tokenDefModule.TokenDef> => {
        return prev.concat(cur);
    });
}