import * as lexerModule from "./lexer";
import * as typesModule from "./parser/types";
import * as replaceTabsAndSpaces from "./parser/replace-tabs-and-spaces";
import * as splitToLines from "./parser/split-to-lines";
import * as cascadeLines from "./parser/cascade-lines";

function reType(tokens: Array<lexerModule.FlucToken>): Array<typesModule.Token>
{
    return tokens;
}

export function parseLines(tokens: Array<lexerModule.FlucToken>): Array<typesModule.Line>
{
    let tokensWithoutTabs: Array<typesModule.Token> = replaceTabsAndSpaces.run(reType(tokens));
    let lines: Array<typesModule.Line> = splitToLines.run(tokensWithoutTabs);
    return cascadeLines.run(lines);
}