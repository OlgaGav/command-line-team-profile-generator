const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialize Intern object", () => {
    test("Create Intern object with parameters: id, name, email, school", async () => {
      // setup
      const id = "123";
      const name = "John Smith";
      const email = "test@test.com";
      const school = "California State University, Chico";
      // running the code
      const intern = new Intern(id, name, email, school);
      // validation
      expect(intern.id).toBe(id);
      expect(intern.name).toBe(name);
      expect(intern.email).toBe(email);
      expect(intern.school).toBe(school);
    });
  });

  describe("Validate methods of Intern object", () => {
    test("Method getSchool() return the valid school value of the Intern", async () => {
      // setup
      const school = "California State University, Chico";
      const intern = new Intern("123", "John Smith", "test@test.com", school);

      // running the code
      const actual_school = intern.getSchool();

      // verify the result
      expect(actual_school).toBe(school);
    });

    test("Method getRole() return the valid role of the Intern", async () => {
      // setup
      const intern = new Intern(
        "123",
        "John Smith",
        "test@test.com",
        "California State University, Chico"
      );

      // running the code
      const role = intern.getRole();

      // verify the result
      expect(role).toBe("Intern");
    });
  });
});
