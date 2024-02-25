const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVG } = require('./lib/generateSVG');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Please input three characters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please input a text color (or hexadecimal number)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please pick a background shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please input a shape color (or hexadecimal number)'
        }
    ]).then((data) => {
            console.log(generateSVG(data))

            fs.writeFile('logo.svg', generateSVG(data));

    })