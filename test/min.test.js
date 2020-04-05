/* eslint-disable */

const roman2int = require('../dist/index.min');

const numbers = [{
        arabic: 1,
        romann: "I"
    },
    {
        arabic: 3,
        romann: "III"
    },
    {
        arabic: 4,
        romann: "IV"
    },
    {
        arabic: 8,
        romann: "VIII"
    },
    {
        arabic: 9,
        romann: "IX"
    },
    {
        arabic: 10,
        romann: "X"
    },
    {
        arabic: 15,
        romann: "XV"
    },
    {
        arabic: 28,
        romann: "XXVIII"
    },
    {
        arabic: 69,
        romann: "LXIX"
    },
    {
        arabic: 99,
        romann: "XCIX"
    },
    {
        arabic: 1798,
        romann: "MDCCXCVIII"
    },
    {
        arabic: 1952,
        romann: "MCMLII"
    },
    {
        arabic: 2883,
        romann: "MMDCCCLXXXIII"
    },
    {
        arabic: 1882,
        romann: "MDCCCLXXXII"
    },
    {
        arabic: 2863,
        romann: "MMDCCCLXIII"
    },
    {
        arabic: 3561,
        romann: "MMMDLXI"
    },
    {
        arabic: 3868,
        romann: "MMMDCCCLXVIII"
    },
    {
        arabic: 2869,
        romann: "MMDCCCLXIX"
    },
    {
        arabic: 1866,
        romann: "MDCCCLXVI"
    },
    {
        arabic: 2639,
        romann: "MMDCXXXIX"
    },
    {
        arabic: 3167,
        romann: "MMMCLXVII"
    },
    {
        arabic: 3747,
        romann: "MMMDCCXLVII"
    },
    {
        arabic: 3999,
        romann: "MMMCMXCIX"
    },
];

test('roman2int() Converts roman numerals to arabic number', () => {

    numbers.forEach(number => {
        expect(roman2int(number.romann)).toBe(number.arabic);
    });

    expect(roman2int(0)).toBe("String is required");
    expect(roman2int('')).toBe("String is required");
    expect(roman2int('0')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('#')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('i')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('v')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('x')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('c')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('d')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('m')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('IC')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('ID')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('IM')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('XD')).toBe("Invalid or unsupported roman numeral");
    expect(roman2int('XM')).toBe("Invalid or unsupported roman numeral");
});