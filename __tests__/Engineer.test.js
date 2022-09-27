const Engineer = require("../lib/Engineer");

test("test github", () => {
  let testValue = "GitHubUser";
  let test = new Engineer("Joe", 1, "test@test.com", testValue);
  expect(test.github).toBe(testValue);
});

test("test position", () => {
  let testValue = "Engineer";
  let test = new Engineer("Joe", 1, "test@test.com", "GitHub");
  expect(test.getPosition()).toBe(testValue);
});