import * as typesModule from "./types";

export function run(lines: Array<typesModule.Line>): Array<typesModule.Line>
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