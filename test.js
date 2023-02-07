beforeAll(async () => {
  console.log("i am logging out before all of those functions execute");
});

afterAll(async () => {
  console.log("i am logging out after all of those functions executed");
});

const helloName = (name) => {
  return `Hello ${name}`;
};

describe("Out very first test", () => {
  it(`First taste case`, async () => {
    const a = 2;
    const b = "4";
    const c = 7;
    console.log("im the logging of first case");
    const result = a + b + c;
    expect(result).toBe("247");
  });
});

it("Second taste case", async () => {
    const result = helloName("Javkhaa");
    expect(result).toBe("Hello Javkhaa");
})

it("Third taste case", async () => {
    const result = helloName("Javkhaa");
    expect(result).toBe("Hello Nest");
})
