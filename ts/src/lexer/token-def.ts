export type TokenDef = {
    name: string,
    regExp: string,
}

type TokenDefPretendent = {
    name: unknown,
    regExp: unknown,
}

function checkIsTokenDefPretendent(obj: Object): boolean
{
    return (obj.hasOwnProperty('name'))
        && (obj.hasOwnProperty('regExp'));
}

function checkIsTokenDef(x: TokenDefPretendent): boolean
{
    return (typeof x.name === 'string')
        && (typeof x.regExp === 'string');
}

export function checkType(x: unknown): boolean
{
    if (typeof x as Object !== "object") return false;
    x as Object;
    if(checkIsTokenDefPretendent(x) === false) return false;
    const y: TokenDefPretendent = x as TokenDefPretendent;
    return checkIsTokenDef(y);
}