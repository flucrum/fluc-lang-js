import * as typesModule from "./types";

export function run(tokens: Array<typesModule.Token>): Array<typesModule.Token>
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