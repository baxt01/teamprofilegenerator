// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
        this.role = role;
    }

     getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        // code here
        return 'Manager';
     }

// class end
}

module.exports = Manager;