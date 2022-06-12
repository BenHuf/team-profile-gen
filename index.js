const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

var employees = [];

managerDetails= async function() {
    await inquirer
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
            var manager = new Manager(name, id, email, office);
            employees.push(manager);
            console.log(employees)
            return addEmployee();
        })
}

engineerDetails = async function() {
    await inquirer
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
        var engineer = new Engineer(name, id, email, github);
            employees.push(engineer);
            console.log(employees)
            return addEmployee();
    })
}

internDetails = async function() {
    await inquirer
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
            var intern = new Intern(name, id, email, school);
            employees.push(intern);
            console.log(employees)
            return addEmployee();
        })
}

addEmployee = async function() {
    await inquirer
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
                return employees;
            }
            
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('ERROR');
        }

        console.log('HTML generated')
    })
}

async function init() {
await managerDetails();
console.log(employees)
const htmlContent = await generateHTML(employees)
await writeToFile("./dist/index.html", htmlContent)
}

init();