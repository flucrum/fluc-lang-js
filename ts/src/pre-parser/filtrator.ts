import * as typesModule from "./types";

export function removeSpaces(lines: Array<typesModule.Line>): Array<typesModule.Line>
{
    return filterTokens(lines, spaces);
}

export function removeComments(lines: Array<typesModule.Line>): Array<typesModule.Line>
{
    return filterTokens(lines, comments);
}

function filterTokens(lines: Array<typesModule.Line>, fn: CallableFunction): Array<typesModule.Line>
{
    return lines.map(el => {
        return {
            cascade: el.cascade,
            tokens: el.tokens.filter(el => fn(el)),
        }
    });
}

function spaces(token: typesModule.Token): boolean
{
    return token.name !== "space";
}

function comments(token: typesModule.Token): boolean
{
    return token.name !== "inline-comment";
}