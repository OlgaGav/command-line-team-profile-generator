const Manager = require("../lib/Manager");

//officeNumber
//getRole() // Overridden to return 'Manager'

describe("Manager", () => {
  describe("Initialize Manager object", () => {
    test("Create Manager object with parameters: id, name, email, officeNumber", async () => {
      // setup
      const id = "123";
      const name = "John Smith";
      const email = "test@test.com";
      const officeNumber = "123-67";
      // running the code
      const manager = new Manager(id, name, email, officeNumber);
      // validation
      expect(manager.id).toBe(id);
      expect(manager.name).toBe(name);
      expect(manager.email).toBe(email);
      expect(manager.officeNumber).toBe(officeNumber);
    });
  });

  describe("Validate methods of Manager object", () => {
    test("Method getOfficeNumberl() return the valid officeNumber value of the Manager", async () => {
      // setup
      const officeNumber = "123-456";
      const manager = new Manager(
        "123",
        "John Smith",
        "test@test.com",
        officeNumber
      );

      // running the code
      const actual_officeNumber = manager.getOfficeNumber();

      // verify the result
      expect(actual_officeNumber).toBe(officeNumber);
    });

    test("Method getOfficeNumberl() setup the Office Number value", async () => {
      // setup
      const officeNumber = "123-456";
      const manager = new Manager(
        "123",
        "John Smith",
        "test@test.com"
      );

      // running the code
      manager.setOfficeNumber(officeNumber);

      // verify the result
      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });

    test("Method getOfficeNumberl() replace the previous officeNumber value when it was setup before", async () => {
      // setup
      const officeNumber = "ext.123";
      const manager = new Manager(
        "123",
        "John Smith",
        "test@test.com",
        "ext.56"
      );

      // running the code
      manager.setOfficeNumber(officeNumber);

      // verify the result
      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });


    test("Method getRole() return the valid role of the Manager", async () => {
      // setup
      const manager = new Manager(
        "123",
        "John Smith",
        "test@test.com",
        "123-456"
      );

      // running the code
      const role = manager.getRole();

      // verify the result
      expect(role).toBe("Manager");
    });
  });
});
