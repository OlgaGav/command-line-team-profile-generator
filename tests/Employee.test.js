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

    test("Employee object can't be created with undefined name", async () => {
      // test setup
      const name = "undefined";

      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee("123", name, "test@test.com");
        } catch (error) {
          return error;
        }
      }

      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid name value provided. It can not be null or empty."
      );
    });

    test("Employee object can't be created with empty name", async () => {
      // test setup
      const name = "";

      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee("123", name, "test@test.com");
        } catch (error) {
          return error;
        }
      }

      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid name value provided. It can not be null or empty."
      );
    });

    test("Employee can't be created with null name", async () => {
      // test setup
      const name = null;

      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee("123", name, "test@test.com");
        } catch (error) {
          return error;
        }
      }

      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid name value provided. It can not be null or empty."
      );
    });

    test("Employee can't be created with undefined id", async () => {
      // test setup
      const id = "undefined";
      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee(id, "John Smith", "test@test.com");
        } catch (error) {
          return error;
        }
      }
      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid ID value provided. It can not be null or empty."
      );
    });
    test("Employee can't be created with empty id", async () => {
      // test setup
      const id = "";
      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee(id, "John Smith", "test@test.com");
        } catch (error) {
          return error;
        }
      }
      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid ID value provided. It can not be null or empty."
      );
    });
    test("Employee can't be created with null id", async () => {
      // test setup
      const id = null;
      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee(id, "John Smith", "test@test.com");
        } catch (error) {
          return error;
        }
      }
      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid ID value provided. It can not be null or empty."
      );
    });
    test("Employee can't be created with undefined email", async () => {
      // test setup
      const email = "undefined";
      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee("123", "John Smith", email);
        } catch (error) {
          return error;
        }
      }
      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid email value provided. It can not be null or empty."
      );
    });
    test("Employee can't be created with empty email", async () => {
      // test setup
      const email = "";
      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee("123", "John Smith", email);
        } catch (error) {
          return error;
        }
      }
      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid email value provided. It can not be null or empty."
      );
    });
    test("Employee can't be created with null email", async () => {
      // test setup
      const email = null;
      // running the code
      function testThrowingError() {
        try {
          const employee = new Employee("123", "John Smith", email);
        } catch (error) {
          return error;
        }
      }
      // verify the result
      expect(testThrowingError()).toBe(
        "Invalid email value provided. It can not be null or empty."
      );
    });
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
