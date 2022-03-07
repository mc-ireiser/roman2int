const regex: RegExp =
  /^M{0,3}(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;

let romeNums: { [index: string]: number } = {
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

/***
 * Entry point function to convert a Roman number to an Arabic number
 * @param {string} romanNumeral - Roman number to convert
 */
function roman2int(romanNumeral: string) {
  if (!romanNumeral) {
    return responseObject(null, false, "Roman numeral string is required");
  }

  const romanNumeralString = romanNumeral.trim().toUpperCase();
  const isValidRomanNumeralString = regex.test(romanNumeralString);

  if (isValidRomanNumeralString) {
    const RomanNumeralInt = calculateIntegerFromRomanNumeralString(romanNumeralString);
    return responseObject(RomanNumeralInt, true);
  } else {
    return responseObject(null, false, "Invalid or unsupported roman numeral");
  }
}

/***
 * Convert a Roman number to an Arabic number
 * @param {string} romanNumeralString - Roman number to convert
 */
function calculateIntegerFromRomanNumeralString(romanNumeralString: string) {
  let result: number = 0;

  romanNumeralString.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (item: string) {
    result += romeNums[item.toString()];
    return '';
  });

  return result;
}

/***
 * Response return
 * @param {int|null} value - Arabic numeral resulting from the conversion
 * @param {boolean} success - Conversion result
 * @param {string} message - Conversion result notes
 */
function responseObject(value: number|null, success: boolean, message?: string) {
  return {
    value,
    success,
    message: message || null,
  }
}

module.exports = roman2int;
