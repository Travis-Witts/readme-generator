// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project? "
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of the Project: "
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how the user may use the project: "
    },
    {
        type: "input",
        name: "install",
        message: "How may the user install your project? "
    },
    {
        type: "input",
        name: "contributions",
        message: "How would you like users to contribute to the project? "
    },
    {
        type: "input",
        name: "testing",
        message: "Provide testing instructions for the user: "
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to apply to your project?",
        choices: ["AGPL v3", "Apache 2.0", "GPL v3", "LGPL v3", "MIT", "MPL 2.0"]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username: "
    }
];

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to my readme generator, please answer the following questions to generate.")
    console.log("----------------------------------------------------------")
    inquirer.prompt(questions).then((data) => writeToFile("README.md", generateMarkdown(data)))
    .then(() => console.log("Success!"))
    .catch((err) =>console.error(err))
}

// Function call to initialize app
init();
