// array of questions for user
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "Installation",
        message: "Do you have intallation instructions? If not respond with none."
    },
    {
        type: "input",
        name: "Usage",
        message: "What is your project usage?"
    },
    {
        type: "checkbox",
        message: "Please select your license choice?",
        choices: [
            "apache",
            "MIT",
            "Boost",
            "BSD"
        ],
        name: "License",
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who contributed on this project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Do you have any test instructions? If not respond with none."
    },
    {
        type: "input",
        name: "Github",
        message: "What is your Github user name?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your Email?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            throw err
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {

        const readMe = generateMarkdown(answers);
        console.log(readMe)
        writeToFile('readMe.md', readMe)
    })
}

// function call to initialize program
init();
