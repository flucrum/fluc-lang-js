import * as typesModule from "./types";

export function run(lines: Array<typesModule.Line>): Array<typesModule.Line>
{
    return lines.map(el => {
        return {
            cascade: el.cascade,
            tokens: el.tokens.filter(el => {
                return el.name !== "space";
            }),
        }
    });
}