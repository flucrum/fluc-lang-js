import * as fs from "fs";
import * as assert from "assert";

export type TokenDef = {
    name: string,
    regExp: RegExp,
}

export class LuxLangLexer 
{
    protected tokenDefs: Array<TokenDef>;

    constructor(tokenDefs: Array<TokenDef>) {
        this.tokenDefs = tokenDefs;
    }
}

export function parseLoadFromConfig(configPath: string, coding: string = 'utf8'): LuxLangLexer
{
    const configFileContent = fs.readFileSync(configPath, {encoding: coding as unknown as undefined});
    return new LuxLangLexer([]);
}