const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const employeeQuestions = [{
    // Employee Name
    type: 'input',
    name: 'name',
    message: "What is this employee's name?",
},
{
    // Employee ID
    type: 'input',
    name: 'id',
    message: "What is this employee's employee ID?",
},
{
    // Employee email
    type: 'input',
    name: 'email',
    message: "What is this employee's email address?",
}]

function Prompt() {
    this.managers = [];
    this.engineers = [];
    this.interns = [];
}

Prompt.prototype.employeeDetails = async function() {
    await inquirer
        .prompt({
            // Employee Role
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ["Manager", 'Engineer', 'Intern'],
        })
        .then(({ role }) => {
            if (role === 'Manager') {
                inquirer
                    .prompt([{
                        // Employee Name
                        type: 'input',
                        name: 'name',
                        message: "What is this employee's name?",
                        validate: nameInput => {
                            if(!nameInput) {
                                console.log('Please enter the employee name');
                                return false;
                            }
                            return true;
                        }
                    },
                    {
                        // Employee ID
                        type: 'input',
                        name: 'id',
                        message: "What is this employee's employee ID?",
                        validate: idInput => {
                            if(!idInput) {
                                console.log('Please enter the employee ID');
                                return false;
                            }
                            return true;
                        }
                    },
                    {
                        // Employee email
                        type: 'input',
                        name: 'email',
                        message: "What is this employee's email address?",
                        validate: emailInput => {
                            if(!emailInput) {
                                console.log('Please enter the employee email');
                                return false;
                            }
                            return true;
                        }
                    },
                    {
                        type: 'input',
                        name: 'office',
                        message: "What is this manager's office number?",
                        validate: officeInput => {
                            if(!officeInput) {
                                console.log("Please enter the employee's office number");
                                return false;
                            }
                            return true;
                        }
                    }])
                    .then(({name, id, email, office}) => {
                        this.managers.push(new Manager(name, id, email, office));
                        console.log(this.managers);
                        return this.addEmployee();
                    })
            }
            else if (role === 'Engineer') {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'github',
                        message: "What is this engineer's GitHub?",
                    })
                    .then(({name, id, email, github}) => {
                        this.engineers.push(new Engineer(name, id, email, github));
                        console.log(this.engineers);
                        return this.addEmployee();
                    })
            }
            else if (role === 'Intern') {
                inquirer
                    .prompt({
                        type: 'input',
                        name: 'school',
                        message: "What is this intern's school?",
                    })
                    .then(({name, id, email, school}) => {
                        this.interns.push(new Intern(name, id, email, school));
                        console.log(this.interns)
                        return this.addEmployee();
                    })
            }
        })
}

Prompt.prototype.addEmployee = function() {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'ans',
            message: 'Would you like to add another employee?',
        })
        .then(({ ans }) => {
            if(ans) {
                return this.employeeDetails()
            }
        })
}

module.exports = Prompt;