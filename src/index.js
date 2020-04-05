const regex = /^M{0,3}(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;

const romeNums = {
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

function roman2int(value) {
  if (!value || typeof value !== 'string') {
    return 'String is required';
  }

  const imputString = value.trim();
  const isValidRomanNum = regex.test(imputString);

  return response(isValidRomanNum, value);
}

function response(isValidRomanNum, value) {
  const romeNum = value.trim();

  if (isValidRomanNum) {
    return calculateInteger(romeNum);
  } else {
    return 'Invalid or unsupported roman numeral';
  }
}

function calculateInteger(romeNum) {
  let result = null;

  romeNum.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (item) => {
    result += romeNums[item];
  });

  return result;
}

module.exports = roman2int;