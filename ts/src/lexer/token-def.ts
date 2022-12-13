export type TokenDef = {
    name: string,
    regExp: RegExp,
}

export function checkType(x: unknown): boolean
{
    return (typeof x as Object === "object")
        && (x.hasOwnProperty('name'))
        && (x.hasOwnProperty('regExp'));
}