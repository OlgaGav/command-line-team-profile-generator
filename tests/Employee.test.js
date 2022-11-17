const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    test("User can create an employee object with name, id, emai", async () => {
      // setup
      const id = "123";
      const name = "John Smith";
      const email = "test@test.com";

      // running the code
      const employee = new Employee(id, name, email);

      // verify the result
      expect(employee.id).toBe(id);
      expect(employee.name).toBe(name);
      expect(employee.email).toBe(email);
    });

    test("[Negative test] employee object can't be created with undefined name", async () => {
      // test setup
      const id = "123";
      const name = 'undefined';
      const email = "test@test.com";

      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee(id, name, email);
        } catch (error) {
          return error;
        }
      }

      // verify the result
      expect(testThrowingError()).toBe("Verify name value. It can not be null or empty.");
    });

    test("[Negative test] employee object can't be created with empty name", async () => {
      // test setup
      const id = "123";
      const name = "";
      const email = "test@test.com";

      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee(id, name, email);
        } catch (error) {
          return error;
        }
      }

      // verify the result
      expect(testThrowingError()).toBe("Verify name value. It can not be null or empty.");
    });

    test("[Negative test] employee can't be created with null name", async () => {
      // test setup
      const id = "123";
      const name = null;
      const email = "test@test.com";

      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee(id, name, email);
        } catch (error) {
          return error;
        }
      }

      // verify the result
      expect(testThrowingError()).toBe("Verify name value. It can not be null or empty.");
    });

    // test("[Negative test] employee can't be created without id", async () => {});
    // test("[Negative test] employee can't be created with empty id", async () => {});
    // test("[Negative test] employee can't be created with null id", async () => {});
    // test("[Negative test] employee can't be created without email", async () => {});
    // test("[Negative test] employee can't be created with empty email", async () => {});
    // test("[Negative test] employee can't be created with null email", async () => {});
  });

  describe("Validate methods of Employee object", () => {

    test("Method getName() return the valid name of the Employee", async () => {
      // setup
      const name = "John Smith";
      const employee = new Employee("123", name, "test@test.com");

      // running the code
      const actual_name = employee.getName();

      // verify the result
      expect(actual_name).toBe(name);
    });

    test("Method getId() return the valid Id of the Employee", async () => {
      // setup
      const id = "123456";
      const employee = new Employee(id, "John Smith", "test@test.com");

      // running the code
      const actual_id = employee.getId();

      // verify the result
      expect(actual_id).toBe(id);
    });

    test("Method getEmail() return the valid email of the Employee", async () => {
      // setup
      const email = "test@test.com";
      const employee = new Employee("123", "John Smith", email);

      // running the code
      const actual_email = employee.getEmail();

      // verify the result
      expect(actual_email).toBe(email);
    });

    test("Method getRole() return the valid role of the Employee", async () => {
      // setup
      const employee = new Employee("123", "John Smith", "test@test.com");

      // running the code
      const role = employee.getRole();

      // verify the result
      expect(role).toBe("Employee");
    });

  });
});
