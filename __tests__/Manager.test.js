const Manager = require("../lib/Manager");

test("test office number", () => {
  const testValue = 100;
  const test = new Manager("Joe", 1, "test@test.com", testValue);
  expect(test.officeNum).toBe(testValue);
});

test("test position", () => {
  const testValue = "Manager";
  const test = new Manager("Joe", 1, "test@test.com", 100);
  expect(test.getPosition()).toBe(testValue);
});