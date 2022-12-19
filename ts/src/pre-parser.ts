import * as lexerModule from "./lexer";
import * as typesModule from "./pre-parser/types";
import * as replaceTabsAndSpacesModule from "./pre-parser/replace-tabs-and-spaces";
import * as splitToLinesModule from "./pre-parser/split-to-lines";
import * as cascadeLinesModule from "./pre-parser/cascade-lines";
import * as filtratorModule from "./pre-parser/filtrator";

function reType(tokens: Array<lexerModule.FlucToken>): Array<typesModule.Token>
{
    return tokens;
}

export function parseLines(tokens: Array<lexerModule.FlucToken>): Array<typesModule.Line>
{
    let tokensWithoutTabs: Array<typesModule.Token> = replaceTabsAndSpacesModule.run(reType(tokens));
    let lines: Array<typesModule.Line> = splitToLinesModule.run(tokensWithoutTabs);
    let cascadedLines = cascadeLinesModule.run(lines);
    let cascadedLinesWithoutSpace = filtratorModule.removeSpaces(cascadedLines);
    let cascadedLinesWithoutComments = filtratorModule.removeComments(cascadedLinesWithoutSpace);
    let pureLines = cascadedLinesWithoutComments.filter(el => {
        return el.tokens.length !== 0;
    })
    return pureLines;
}