const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
        this.role = 'Manager';
    }

    getOffice() {
        return `This manager's office number is ${this.office}`;
    }
}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overidden to return 'Manager'