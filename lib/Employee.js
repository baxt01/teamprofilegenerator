// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        // code here
        return this.name;
    }

    getId() {
        // code here
        return this.id;
    }

    getEmail() {
        // code here
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

// end of class.
}

module.exports = Employee;