import * as fs from "fs";
export class LuxLangLexer {
    constructor(tokenDefs) {
        this.tokenDefs = tokenDefs;
    }
}
export function parseLoadFromConfig(configPath, coding = 'utf8') {
    const configFileContent = fs.readFileSync(configPath, { encoding: coding });
    return new LuxLangLexer([]);
}
