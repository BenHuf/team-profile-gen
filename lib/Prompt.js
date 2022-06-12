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
    this.employees = [];
}

Prompt.prototype.managerDetails = function() {
    inquirer
        .prompt([{
            // Manager Name
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name.",
            validate: nameInput => {
                if(!nameInput) {
                    console.log("Please enter the manager's name");
                    return false;
                }
                return true;
            }
        },
        {
            // Manager ID
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
            validate: idInput => {
                if(!idInput) {
                    console.log('Please enter an employee ID');
                    return false;
                }
                return true;
            }
        },
        {
            // Manager email
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: emailInput => {
                if(!emailInput) {
                    console.log("Please enter the manager's email");
                    return false;
                }
                return true;
            }
        },
        {
            // Manager Office Number
            type: 'input',
            name: 'office',
            message: "What is this manager's office number?",
            validate: officeInput => {
                if(!officeInput) {
                    console.log("Please enter the manager's office number");
                    return false;
                }
                return true;
            }
        }])
        .then(({name, id, email, office}) => {
            this.employees.push(new Manager(name, id, email, office));
            return this.addEmployee();
        })
}

Prompt.prototype.engineerDetails = function() {
    inquirer
    .prompt([{
        // Engineer Name
        type: 'input',
        name: 'name',
        message: "What is this engineer's name?",
        validate: nameInput => {
            if(!nameInput) {
                console.log("Please enter the engineer's name");
                return false;
            }
            return true;
        }
    },
    {
        // Engineer ID
        type: 'input',
        name: 'id',
        message: "What is this engineer's employee ID?",
        validate: idInput => {
            if(!idInput) {
                console.log("Please enter this engineer's employee ID");
                return false;
            }
            return true;
        }
    },
    {
        // Employee email
        type: 'input',
        name: 'email',
        message: "What is this engineer's email address?",
        validate: emailInput => {
            if(!emailInput) {
                console.log("Please enter this engineer's email");
                return false;
            }
            return true;
        }
    },
    {
        // Engineer GitHub
        type: 'input',
        name: 'github',
        message: "What is this engineer's GitHub username?",
        validate: githubInput => {
            if(!githubInput) {
                console.log("Please enter this engineer's GitHub username");
                return false;
            }
            return true;
        }
    }])
    .then(({name, id, email, github}) => {
        this.employees.push(new Engineer(name, id, email, github));
        return this.addEmployee();
    })
}

Prompt.prototype.internDetails = function() {
    inquirer
        .prompt([{
            // Intern Name
            type: 'input',
            name: 'name',
            message: "What is this intern's name?",
            validate: nameInput => {
                if(!nameInput) {
                    console.log("Please enter this intern's name");
                    return false;
                }
                return true;
            }
        },
        {
            // Intern ID
            type: 'input',
            name: 'id',
            message: "What is this intern's employee ID?",
            validate: idInput => {
                if(!idInput) {
                    console.log("Please enter this intern's employee ID");
                    return false;
                }
                return true;
            }
        },
        {
            // Intern email
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?",
            validate: emailInput => {
                if(!emailInput) {
                    console.log("Please enter this intern's email");
                    return false;
                }
                return true;
            }
        },
        {
            // Intern School
            type: 'input',
            name: 'school',
            message: "What is this intern's school?",
            validate: schoolInput => {
                if(!schoolInput) {
                    console.log("Please enter this intern's school");
                    return false;
                }
                return true;
            }
        }])
        .then(({name, id, email, school}) => {
            this.employees.push(new Intern(name, id, email, school));
            console.log(this.employees)
            return this.addEmployee();
        })
}

Prompt.prototype.addEmployee = function() {
    inquirer
        .prompt({
            type: 'list',
            name: 'ans',
            message: 'Would you like to add an another employee or finish building the team?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team']
        })
        .then(({ ans }) => {
            switch(ans) {
            case 'Add an Engineer':
                return this.engineerDetails();
            case 'Add an Intern':
                return this.internDetails();
            case 'Finish Building Team':
                // console.log(this.employees)
                return this.employees;
            }
            
        })
}

module.exports = Prompt;