import * as fs from "fs";
import * as assert from "assert";

export type FlucLangConfig = {
    tokenDefsFilePaths: Array<string>;
}

export function loadFromFile(filePath: string, coding: string = 'utf8'): FlucLangConfig
{
    const configFileContent = fs.readFileSync(filePath, {encoding: coding as unknown as undefined}).toString();
    assert.ok(configFileContent.length > 0);
    const configFileParsed = JSON.parse(configFileContent) as FlucLangConfig;
    return configFileParsed;
}