declare const regex: RegExp;
declare let romeNums: {
    [index: string]: number;
};
/**
 * Receive a string with the Roman numeral for processing.
 * @param  {string} value - Roman numeral.
 * @returns {number | string} returnValue - Number | "String is required" | "Invalid or unsupported roman numeral"
 */
declare function roman2int(value: string): number | "String is required" | "Invalid or unsupported roman numeral";
/**
 * @param  {boolean} isValidRomanNum - Valid roman numeral.
 * @param  {string} value - Roman numeral.
 * @returns {number | string} returnValue - Number | "Invalid or unsupported roman numeral"
 */
declare function response(isValidRomanNum: boolean, value: string): number | "Invalid or unsupported roman numeral";
/**
 * @param  {string} romeNum - Roman numeral.
 * @returns {number} returnValue - Number
 */
declare function calculateInteger(romeNum: string): number;
