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

test('Throws error when negative numbers found(Test for single negative number)', () => {
    expect(() => sum("1,-2,3")).toThrow("negative numbers not allowed -2");
});

test('Throws error when negative numbers found(Test for all the negative numbers)', () => {
    expect(() => sum("1,-6,3,6,-12")).toThrow("negative numbers not allowed -6, -12");
});
