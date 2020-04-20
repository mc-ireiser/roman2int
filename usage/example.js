const roman2int = require('../lib/index.js');

const romanNumbers = [
  '',
  'XLIX',
  'MDCCXCVIII',
  'MCMLII',
  'MMDCCCLXXXIII',

  'MDCCCLXXXII',
  'MMDCCCLXIII',
  'XD',
  'MMMDLXI',
  'MMMDCCCLXVIII',
  'MMDCCCLXIX',
  'MDCCCLXVI',
  'iii',
  'MMDCXXXIX',
  'MMMCLXVII',
  'MMMDCCXLVII',
  '0',
];

let numbersMap = [];

romanNumbers.forEach((romanNumber, index) => {
  const intNumber = roman2int(romanNumber);

  typeof intNumber === 'number'
    ? numbersMap.push({
        roman: romanNumber,
        arabic: intNumber,
      })
    : console.log(
        `- Pass# ${index},`,
        `Roman numeral: ${romanNumber},`,
        `roman2int error: ${intNumber}`,
      );
});

console.log('- numbersMap', numbersMap);
