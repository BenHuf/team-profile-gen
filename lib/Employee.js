class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return `This employee's name is ${this.name}`;
    }

    getId() {
        return `This employee's ID is ${this.id}`;
    }

    getEmail() {
        return `This employee's ID is ${this.email}`;
    }

    getRole() {
        return `This employee's role is ${this.role}`
    }

}

module.exports = Employee;

// name ✅
// id ✅
// email ✅
// getName() ✅
// getId() ✅
// getEmail() ✅
// getRole() ✅
