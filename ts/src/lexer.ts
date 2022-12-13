import * as fsModule from "fs";
import * as assertModule from "assert";
import * as configModule from "./config";
import * as tokenDefModule from "./lexer/token-def";


export class LuxLangLexer 
{
    protected tokenDefs: Array<tokenDefModule.TokenDef>;

    constructor(tokenDefs: Array<tokenDefModule.TokenDef>) {
        this.tokenDefs = tokenDefs;
    }
}

export function parseLoadFromConfig(configPath: string, coding: string = 'utf8'): LuxLangLexer
{
    const config = configModule.loadFromFile(configPath);
    return new LuxLangLexer([]);
}