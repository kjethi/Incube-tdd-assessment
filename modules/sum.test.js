const sum = require("./sum")

test('If there is empty string then returns 0', () => {
    expect(sum("")).toBe(0);
});

test('Sum of single number', () => {
    expect(sum("5")).toBe(5);
});

test('Sum of two comma separated numbers', () => {
    expect(sum("5,7")).toBe(12);
});

test('Sum of N number of comma separated numbers', () => {
    expect(sum("5,7,4,5,6")).toBe(27);
});

test('Sum of "N numbers" of comma separated or "\\n" delimeter between two numbers in string","', () => {
    expect(sum("5\n7,4,5\n6")).toBe(27);
});

test('supports custom delimiters', () => {
    expect(sum("//*\n12*3")).toBe(15);
});
