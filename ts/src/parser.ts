import * as lexerModule from "./lexer";
import * as typesModule from "./parser/types";

function reType(tokens: Array<lexerModule.FlucToken>): Array<typesModule.Token>
{
    return tokens;
}


export function parseLines(tokens: Array<lexerModule.FlucToken>): Array<typesModule.Line>
{
    let tokensWithoutTabs: Array<typesModule.Token> = replaceTabsAndSpaces(reType(tokens));
    let lines: Array<typesModule.Line> = splitToLines(tokensWithoutTabs);
    return cascadeLines(lines);
}

function replaceTabsAndSpaces(tokens: Array<typesModule.Token>): Array<typesModule.Token>
{
    let result: Array<typesModule.Token> = [];
    tokens.forEach(el => {
        if(el.name === 'tab') {
            for(let i = 0; i < 4 * el.val.length; i ++) {
                result.push({
                    name: "space",
                    val: " ",
                    pos: el.pos,
                });
            }
        } else if(el.name === 'space') {
            for(let i = 0; i < el.val.length; i ++) {
                result.push({
                    name: "space",
                    val: " ",
                    pos: el.pos,
                });
            }
        } else {
            result.push(el);
        }
    });
    return result;
}

function splitToLines(tokens: Array<typesModule.Token>): Array<typesModule.Line>
{
    let lines: Array<typesModule.Line> = [];
    let curLine: Array<typesModule.Token> = [];
    tokens.forEach(el => {
        if(el.name === 'new-line') {
            lines.push({ cascade: 0, tokens: curLine, });
            curLine = [];
        } else {
            curLine.push(el);
        }
    });
    if(curLine.length !== 0) {
        lines.push({ cascade: 0, tokens: curLine, });
    }
    return lines;
}

function cascadeLines(lines: Array<typesModule.Line>): Array<typesModule.Line>
{
    return lines.map(el => {
        let tokensLength = el.tokens.length;
        let spaces = 0;
        for(let i = 0; i < tokensLength; i++)
        {
            if(el.tokens[i].name === 'space') {
                spaces++;
            } else {
                break;
            }
        }
        
        let tokens = [];
        for(let i = spaces; i < tokensLength; i++)
        {
            tokens.push(el.tokens[i]);
        }
        return {
            tokens: tokens,
            cascade: spaces,
        };
    });
}

//export function splitPhrases(tokens: Array<lexerModule.FlucToken>): Array<Phrase>
//{
//    
//}