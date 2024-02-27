const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) { //This doesn't have the role like we tried 
    super(name, id, email); // "Manager" argument also removed 
    this.officeNumber = officeNumber; 
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

}

module.exports = Manager;