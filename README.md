[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) ![npm](https://img.shields.io/npm/v/roman2int) ![Node.js CI](https://github.com/mc-ireiser/roman2int/workflows/Node.js%20CI/badge.svg?branch=master)

# roman2int

Convert roman numerals to arabic number.

Romans Numerals are based on the following symbols.

```
{
    I: 1
    V: 5
    X: 10
    L: 50
    C: 100
    D: 500
    M: 1000
}
```

#### Roman Numerals rules

- When a symbol appears after a larger (or equal) symbol it is added.
- But if the symbol appears before a larger symbol it is subtracted.
- Don't use the same symbol more than three times in a row.

**NOTE:** The bars are not compatible, so the maximum supported Roman number is MMMCMXCIX, which is equal to 3999.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/roman2int) to install roman2int.

```bash
npm i roman2int
```

## Usage

```bash
const roman2int = require('roman2int');

const number = roman2int("MMXX"); // 2020
```

##### Usage example

See the [example.js](usage/example.js) file in the `usage` folder

```bash
npm run usage

# node usage/example.js
```

**Live on [Runkit roman2int](https://npm.runkit.com/roman2int) and [Runkit roman2int example](https://runkit.com/ireiser/roman2int)**

## Running the tests

```bash
mkdir test-roman2int-folder

cd test-roman2int-folder

git clone https://github.com/mc-ireiser/roman2int.git

cd roman2int

npm i

npm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
