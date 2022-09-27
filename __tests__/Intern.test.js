const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UOFU";
  const test = new Intern("Foo", 1, "test@test.com", testValue);
  expect(test.school).toBe(testValue);
});

test("getPosition() should return \"Intern\"", () => {
    const testValue = "Intern";
    const test = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(test.getPosition()).toBe(testValue);
});

  test("Can get school via getSchool()", () => {
    const testValue = "UOFU";
    const test = new Intern("Foo", 1, "test@test.com", testValue);
    expect(test.getSchool()).toBe(testValue);
});