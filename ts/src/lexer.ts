import * as fsModule from "fs";
import * as assertModule from "assert";
import * as configModule from "./config";
import * as tokenDefModule from "./lexer/token-def";
import * as tokenLoaderModule from "./lexer/token-loader";

export type FlucLangLexer = {
    tokenDefs: Array<tokenDefModule.TokenDef>;
}

export type FlucToken = {
    name: string,
    regExp: string,
    pos: number,
    val: string
}

export function parseLoadFromConfig(configPath: string, coding: string = 'utf8'): FlucLangLexer
{
    const config = configModule.loadFromFile(configPath);
    const tokenDefs = tokenLoaderModule.load(configPath, config.tokenDefsFilePaths);
    return {tokenDefs: tokenDefs} as FlucLangLexer;
}

export function analyzeText(str: string, lexer: FlucLangLexer, maxIterationsGuargInt: number = 100000): Array<FlucToken>
{
    const maxTokenLength = lexer.tokenDefs
        .map((val: tokenDefModule.TokenDef) => { return val.regExp.length; })
        .reduce((prev: number, cur: number) => { return Math.max(prev, cur); });
    let tokensResult: Array<FlucToken> = [];
    for(let i = 0; i < maxIterationsGuargInt; i++)
    {
        if(str.length === 0) {
            break;
        }
        let availableTokens = lexer.tokenDefs
            .filter((t) => { return str.search(new RegExp('^' + t.regExp)) === 0; });
        if(availableTokens.length > 1) {
            let maxTokenPhrasLen = availableTokens
                .map((t) => {return (new RegExp("^" + t.regExp)).exec(str)[0].length;})
                .reduce((prev, cur) => {return Math.max(prev, cur)});
            availableTokens = availableTokens
                .filter((t) => {return (new RegExp("^" + t.regExp)).exec(str)[0].length === maxTokenPhrasLen});
        }
        let tokensToReportStr = (availableTokens.length > 0)
            ? availableTokens
                .map((t) => {return t.name})
                .reduce((prev, cur) => {return prev + ", " + cur;})
            : '';
        assertModule.ok(availableTokens.length === 1, "Phrase '" + str.slice(0, maxTokenLength) 
            + "...' must be parsed by only 1 token-def, find " + availableTokens.length + " tokens: " + tokensToReportStr);
        let avTok = availableTokens[0];
        let flucToken: FlucToken = {
            name: avTok.name,
            regExp: avTok.regExp,
            pos: (tokensResult.length > 0) 
                ? tokensResult
                    .map((ft) => { return ft.val.length })
                    .reduce((prev, cur) => { return prev + cur})
                : 0,
            val: (new RegExp('^' + avTok.regExp)).exec(str)[0],
        };
        tokensResult.push(flucToken);
        str = str.slice(flucToken.val.length);
    }
    return tokensResult;
}