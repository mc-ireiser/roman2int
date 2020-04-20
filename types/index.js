var regex = /^M{0,3}(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
var romeNums = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
};
/**
 * Receive a string with the Roman numeral for processing.
 * @param  {string} value - Roman numeral.
 * @returns {number | string} returnValue - Number | "String is required" | "Invalid or unsupported roman numeral"
 */
function roman2int(value) {
    if (!value || typeof value !== 'string') {
        return 'String is required';
    }
    var imputString = value.trim();
    var isValidRomanNum = regex.test(imputString);
    return response(isValidRomanNum, value);
}
/**
 * @param  {boolean} isValidRomanNum - Valid roman numeral.
 * @param  {string} value - Roman numeral.
 * @returns {number | string} returnValue - Number | "Invalid or unsupported roman numeral"
 */
function response(isValidRomanNum, value) {
    var romeNum = value.trim();
    if (isValidRomanNum) {
        return calculateInteger(romeNum);
    }
    else {
        return 'Invalid or unsupported roman numeral';
    }
}
/**
 * @param  {string} romeNum - Roman numeral.
 * @returns {number} returnValue - Number
 */
function calculateInteger(romeNum) {
    var result = 0;
    romeNum.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (item) {
        result += romeNums[item.toString()];
        return 'true';
    });
    return result;
}
module.exports = roman2int;
