const roman2int = require('../roman2int');

const tests = [{
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
        arabic: 3999,
        romann: "MMMCMXCIX"
    },
]

test('roman2int() Converts roman numerals to arabic number', () => {

    tests.forEach(test => {
        expect(roman2int(test.romann)).toBe(test.arabic);

    })

    expect(roman2int(0)).toBe("string is required")
    expect(roman2int('')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('#')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('i')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('v')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('x')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('c')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('d')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('m')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('IC')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('ID')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('IM')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('XD')).toBe("Invalid or unsupported roman numeral")
    expect(roman2int('XM')).toBe("Invalid or unsupported roman numeral")
});