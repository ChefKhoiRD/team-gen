const Engineer = require("../lib/Engineer");

test("github username", () => {
  const testValue = "GitHubUser";
  const test = new Engineer("Joe", 1, "test@test.com", testValue);
  expect(test.github).toBe(testValue);
});

test("getPosition() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const test = new Engineer("Joe", 1, "test@test.com", "GitHub");
    expect(test.getPosition()).toBe(testValue);
});

test("github username", () => {
    const testValue = "GitHubUser";
    const test = new Engineer("Joe", 1, "test@test.com", testValue);
    expect(test.getGithub()).toBe(testValue);
  });