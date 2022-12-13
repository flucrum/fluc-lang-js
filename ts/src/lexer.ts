import * as fsModule from "fs";
import * as assertModule from "assert";
import * as configModule from "./config";
import * as tokenDefModule from "./lexer/token-def";
import * as tokenLoaderModule from "./lexer/token-loader";


export class LuxLangLexer 
{
    public tokenDefs: Array<tokenDefModule.TokenDef>;

    constructor(tokenDefs: Array<tokenDefModule.TokenDef>) {
        this.tokenDefs = tokenDefs;
    }
}

export function parseLoadFromConfig(configPath: string, coding: string = 'utf8'): LuxLangLexer
{
    const config = configModule.loadFromFile(configPath);
    const tokenDefs = tokenLoaderModule.load(configPath, config.tokenDefsFilePaths);
    return new LuxLangLexer(tokenDefs);
}