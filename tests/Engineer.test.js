const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialize Engineer object", () => {
    test("Create Engineer object with parameters: id, name, email, github", async () => {
      // setup
      const id = "123";
      const name = "John Smith";
      const email = "test@test.com";
      const github = "testuser";
      // running the code
      const engineer = new Engineer(id, name, email, github);
      // validation
      expect(engineer.id).toBe(id);
      expect(engineer.name).toBe(name);
      expect(engineer.email).toBe(email);
      expect(engineer.github).toBe(github);
    });
  });

  describe("Validate methods of Engineer object", () => {
    test("Method getGithub() return the valid github value of the Engineer", async () => {
      // setup
      const github = "test@test.com";
      const engineer = new Engineer(
        "123",
        "John Smith",
        "test@test.com",
        github
      );

      // running the code
      const actual_github = engineer.getGithub();

      // verify the result
      expect(actual_github).toBe(github);
    });

    test("Method getRole() return the valid role of the Engineer", async () => {
      // setup
      const engineer = new Engineer(
        "123",
        "John Smith",
        "test@test.com",
        "smith-github"
      );

      // running the code
      const role = engineer.getRole();

      // verify the result
      expect(role).toBe("Engineer");
    });
  });
});
