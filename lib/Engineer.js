const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return `This employee's GitHub is ${this.github}`;
    }
}

module.exports = Engineer;

// In addition to Employee's properties and methods, Engineer will also have:
// gitHub
// getGithub()
// getRole() // Overridden to return 'Engineer'