// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    
    getRole() {
        // code here.
        return 'Intern';
    }
    
    getSchool() {
        // code here.
        return this.school;
    }

// class ends here.
}

module.exports = Intern;