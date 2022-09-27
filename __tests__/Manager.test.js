const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const test = new Manager("Foo", 1, "test@test.com", testValue);
  expect(test.officeNum).toBe(testValue);
});

test("getPosition() should return \"Manager\"", () => {
    const testValue = "Manager";
    const test = new Manager("Foo", 1, "test@test.com", 100);
    expect(test.getPosition()).toBe(testValue);
});

test("Can get office number via officeNum()", () => {
    const testValue = 100;
    const test = new Manager("Foo", 1, "test@test.com", testValue);
    expect(test.getOfficeNum()).toBe(testValue);
});