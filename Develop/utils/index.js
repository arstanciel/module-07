// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
import fs from 'fs';
import path from 'path';
// TODO: Create an array of questions for user input
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?'
    },
    {
        type: 'input',
        name: 'problemsolve',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Provide any contributions.'
    },
    {
        type: 'input',
        name: 'collab',
        message: 'Are there any collaborators for this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName); // Create the file path
    const readmePageContent = generateMarkdown(data); // Generate the README content

    fs.writeFile('README.md', readmePageContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully created ${fileName}!`);
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`; // Create file name from title
            writeToFile(fileName, data); // Call function to write to file
        })
        .catch(error => {
            console.error('Error during prompting:', error);
        });
}

// Function call to initialize app
init();
