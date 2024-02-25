// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (school, name, id, email) {
        this.school = school;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getSchool = () => {
        // code here.
    }

    getRole = () => {
        // code here.
        // overridden to return 'Intern'
    }

// class ends here.
}