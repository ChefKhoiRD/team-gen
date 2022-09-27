const Intern = require("../lib/Intern");

test("test school", () => {
  let testValue = "UOFU";
  let test = new Intern("Joe", 1, "test@test.com", testValue);
  expect(test.school).toBe(testValue);
});

test("test position", () => {
  let testValue = "Intern";
  let test = new Intern("Joe", 1, "test@test.com", "UCLA");
  expect(test.getPosition()).toBe(testValue);
});