// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor (github, name, id, email) {
        this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getGithub = () => {
        // code here
    }

    getRole = () => {
        // code here
        // overridden to return 'Engineer'
    }


// end of class.
}