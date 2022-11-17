class Employee {
  constructor(id, name, email) {
    if (id==='undefined' || id===null || id===""){
        throw('Invalid ID value provided. It can not be null or empty.');
    } else if (name==='undefined' || name===null || name==="") {
        throw('Invalid name value provided. It can not be null or empty.');
    } else if (email==='undefined' || email===null || email==="") {
        throw('Invalid email value provided. It can not be null or empty.');
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