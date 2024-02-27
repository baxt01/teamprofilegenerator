const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

const team = [];

// Function to prompt for employee details
const promptEmployeeDetails = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the employee name:',
            default: 'Bob'
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter an ID for the employee:',
            default: '1'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the employee email address:',
            default: 'example@sample.com'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role does the employee play in the company?',
            choices: ['Manager', 'Engineer', 'Intern'],
            default: 'Manager'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'Enter the office number:',
            when: function(answers) {
                return answers.role === 'Manager';
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the GitHub username:',
            when: function(answers) {
                return answers.role === 'Engineer';
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school attended:',
            when: function(answers) {
                return answers.role === 'Intern';
            },
        }
    ]);
};

// Recursive function to gather details for all roles
const gatherEmployeeDetails = () => {
    promptEmployeeDetails()
        .then((answers) => {
            let { name, id, email, role, officeNumber, github, school } = answers;
            let employee;

            if (role === 'Manager') {
                employee = new Manager(name, id, email, officeNumber);
            } else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
            }

            team.push(employee);

            // Prompt for next employee or generate HTML if done
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addAnother',
                    message: 'Do you want to add another employee?',
                    default: false
                }
            ]).then((answer) => {
                if (answer.addAnother) {
                    gatherEmployeeDetails(); // Recursive call for next employee
                } else {
                    // Generate HTML for the entire team
                    const html = render(team);

                    // Save the HTML file
                    fs.writeFileSync(outputPath, html);

                    console.log('Team HTML file saved successfully!');
                }
            });
        })
        .catch((err) => {
            console.error('Error occurred:', err);
        });
};

// Start gathering employee details
gatherEmployeeDetails();