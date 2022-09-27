const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const test = new Employee();
  expect(typeof(test)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Joe";
  const test = new Employee(name);
  expect(test.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const test = new Employee("Joe", testValue);
  expect(test.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const test = new Employee("Joe", 1, testValue);
  expect(test.email).toBe(testValue);
});

test("getPosition() should return \"Employee\"", () => {
    const testValue = "Employee";
    const test = new Employee("Joe", 1, "test@test.com");
    expect(test.getPosition()).toBe(testValue);
  });