const { sum } = require("../src/utils/utils");

describe("Example: basci unit test", () => {
  it(`service test`, function () {
    const p = sum(10);
    expect(p).toBe(55);
  });
});
