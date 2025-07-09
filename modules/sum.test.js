const sum = require("./sum")

test('If there is empty string then returns 0', () => {
    expect(sum("")).toBe(0);
});

