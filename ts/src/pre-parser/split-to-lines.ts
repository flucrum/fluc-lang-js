import * as typesModule from "./types";

export function run(tokens: Array<typesModule.Token>): Array<typesModule.Line>
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