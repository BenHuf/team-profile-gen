const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return `This intern's school is ${this.school}`;
    }
}

module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'