// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github, role) {
        super(name, id, email, 'Engineer');
        this.github = github;
        this.role = role;
    }

    getGithub() {
        // code here
        return this.github;
    }

    getRole() {
        // code here
        return 'Engineer';
    }

// end of class.
}

module.exports = Engineer;