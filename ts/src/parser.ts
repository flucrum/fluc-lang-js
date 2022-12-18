import * as lexerModule from "./lexer";

type Phrase = Array<lexerModule.FlucToken>;

type Line = {
    cascade: number;
    tokens: Array<lexerModule.FlucToken>;
}

export function parseLines(tokens: Array<lexerModule.FlucToken>): Array<Line>
{
    let tokensWithoutTabs: Array<lexerModule.FlucToken> = replaceTabsAndSpaces(tokens);
    let lines: Array<Line> = splitToLines(tokensWithoutTabs);
    return cascadeLines(lines);
}

function replaceTabsAndSpaces(tokens: Array<lexerModule.FlucToken>): Array<lexerModule.FlucToken>
{
    let result: Array<lexerModule.FlucToken> = [];
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

function splitToLines(tokens: Array<lexerModule.FlucToken>): Array<Line>
{
    let lines: Array<Line> = [];
    let curLine: Array<lexerModule.FlucToken> = [];
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

function cascadeLines(lines: Array<Line>): Array<Line>
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