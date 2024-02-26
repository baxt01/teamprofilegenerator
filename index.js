const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    /* Pass your questions in here */
    {
    type: 'input',
    name: 'name',
    message: 'enter the employee name.',
    default: 'Bob'
    },
    {
        type: 'number',
        name: 'id',
        message: 'enter an ID for the employee.',
        default: '1'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter the employee email address',
        default: 'example@sample.com'
    },
    {
        type: ' list',
        name: 'role',
        message: 'what role does the employee play in the company',
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Manager'
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: ' enter your phone number',
      when: function( answers ) {
        return answers.role === 'Manager';
      },
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github user name',
        when: function( answers ) {
            return answers.role === 'Engineer';
        },
    },
    {
        type: 'input',
        name: 'school',
        message: 'what school is attended.',
        when: function( answers ) {
            return answers.role === 'Intern';
        },
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    let {name, id, email, role, officeNumber, github, school} = answers;
    let employee;

    if (role === 'Manager') {
        employee = new Manager(name, id, email, role, officeNumber);
    } else if (role === 'Engineer') {
        employee = new Engineer(name, id, email, role, github);
    } else if (role === 'Intern') {
        employee = new Intern(name, id, email, role, school);
    }
  })