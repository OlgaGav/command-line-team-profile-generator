class Employee {
  constructor(id, name, email) {
    if (name==='undefined' || name===null || name===""){
        throw('Verify name value. It can not be null or empty.');
    } else {
        this.id = id;
        this.name = name;
        this.email = email;
    }
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;