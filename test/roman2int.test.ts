import { expect, test } from 'vitest'
// @ts-ignore
import roman2int from "../src/roman2int"
const testNumbers = require("./testData")
const testBadInput = require("./testBadData")

test('Convert Roman numbers to Arabic numbers', () => {
    testNumbers.forEach(item => expect(roman2int(item.roman).value).toBe(item.arabic))
});

test('Test bad input data', () => {
    testBadInput.forEach(item => expect(roman2int(item.input).message).toBe(item.message))
});
