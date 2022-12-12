import * as fs from "fs";
import * as assert from "assert";
export function loadFromFile(filePath, coding = 'utf8') {
    const configFileContent = fs.readFileSync(filePath, { encoding: coding }).toString();
    assert.ok(configFileContent.length > 0);
    const configFileParsed = JSON.parse(configFileContent);
    return configFileParsed;
}
