const testBadData = [
    {
        input: "",
        value: null,
        message: "Roman numeral string is required"
    },
    {
        input: "MMMM",
        value: null,
        message: "Invalid or unsupported roman numeral"
    }
]

module.exports = testBadData