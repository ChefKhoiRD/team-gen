const Employee = require("../lib/Employee");

test("test model", () => {
  let test = new Employee();
  expect(typeof(test)).toBe("object");
});

test("test name", () => {
  let name = "Joe";
  let test = new Employee(name);
  expect(test.getName()).toBe(name);
});

test("test id", () => {
  let testValue = 100;
  let test = new Employee("Joe", testValue);
  expect(test.getId()).toBe(testValue);
});

test("test email", () => {
  let testValue = "test@test.com";
  let test = new Employee("Joe", 1, testValue);
  expect(test.getEmail()).toBe(testValue);
});

test("test position", () => {
  let testValue = "Employee";
  let test = new Employee("Joe", 1, "test@test.com");
  expect(test.getPosition()).toBe(testValue);
});