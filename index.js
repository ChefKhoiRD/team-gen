// Node modules 
const inquirer = require('inquirer');
const fs = require("fs");

// Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Arrays of stored data
let managerInfoArray = [];
let engineerInfoArray = [];
let internInfoArray = [];

// User prompt questions
const userPositionPrompt = {
    type: 'list',
    name: 'userPosition',
    message: "Please select employee's position",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Add another employee",
        "Finished"
    ]
};

// User prompt
const startUserPrompts = () => {

    inquirer.prompt(userPositionPrompt)

    .then(answer => {
        
        switch(answer.userPosition) {
            case "Manager":
                managerPrompt()
                break            
                
            case "Engineer":
                engineerPrompt()
                break
            
            case "Intern":
                    internPrompt()
                    break
    
            case "Finished":
                    writeFile()
                    break
            }
        })
        
    .catch((err) => {
        console.log(err)
    }) 

};     

// Add more employees prompt
const addEmployee = () => {
    inquirer.prompt([
        { 
            type: 'list',
            name: 'moreEmployees',
            message: "Would you like to add another employee?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ])

    // If yes, return starting prompts, else writeFile function
    .then((addAnswers) => {
        if (addAnswers.moreEmployees === "yes") {
            return startUserPrompts()
        }
        
        else {
            return writeFile() 
        }
    })

    .catch((err) => {
        console.log(err)
    })
};

// Manager questions
const managerPrompt = () => {

    // Inquirer questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Name of employee: "
        },
        {
            type: 'input',
            name: 'id',
            message: "ID number: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Email address: "   
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Office number: "
        }
    ])

    .then((managerAnswers) => {

        // Return manager profile
        let manager = new Manager 
        (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNum)
        managerInfoArray.push(manager)

        addEmployee();
    })

    .catch((err) => {
        console.log(err)
    })
};

// Engineer questions
const engineerPrompt = () => {
    // Inquirer questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Name of employee: "
        },
        {
            type: 'input',
            name: 'id',
            message: "ID number: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Email address: "
        },
        {
            type: 'input',
            name: 'github',
            message: "Github: "
        }
    ])

    .then((engineerAnswers) => {

        // Return engineer profile
        let engineer = new Engineer 
        (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
        engineerInfoArray.push(engineer)   

        addEmployee();
    })

    .catch((err) => {
        console.log(err)
    })
};

// Intern questions
const internPrompt = () => {
    // Inquirer questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Name of employee: "
        },
        {
            type: 'input',
            name: 'id',
            message: "ID number: "
        },
        {
            type: 'input',
            name: 'email',
            message: "Email address: "
        }, 
        {
            type: 'input',
            name: 'schoolName',
            message: "Name of school: ",
        },
    ])

    .then((internAnswers) => {

        // Store internAnswers into internInfo
        let intern = new Intern 
        (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.schoolName)
        internInfoArray.push(intern)

        addEmployee()
    })
    
    .catch((err) => {
        console.log(err)
    })
};

const writeFile = () => {
    let managerProfile = "";
    let engineerProfile = "";
    let internProfile = "";

    // Manager profiles
    for (let i = 0; i < managerInfoArray.length; i++) {
        managerProfile = `
            <div class="profile">
            <div class="profile-header">
                <h3>Manager</h3>
                <h4>${managerInfoArray[i].name}</h4>
            </div>
            <div class="profile-content">
                <p class="id">ID: ${managerInfoArray[i].id}</p>
                <p class="email">Email: <a href="mailto:${managerInfoArray[i].email}">${managerInfoArray[i].email}</a></p>
                <p class="office">Office # : ${managerInfoArray[i].officeNum}</p>
            </div>
            </div>
        `
    }

    // Engineer profiles
    for (let i = 0; i < engineerInfoArray.length; i++) {
        engineerProfile = `
            <div class="profile">
            <div class="profile-header">
                <h3>Engineer</h3>
                <h4>${engineerInfoArray[i].name}</h4>
            </div>
            <div class="profile-content">
                <p class="id">ID: ${engineerInfoArray[i].id}</p>
                <p class="email">Email: <a href="mailto:${engineerInfoArray[i].email}">${engineerInfoArray[i].email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineerInfoArray[i].github}">${engineerInfoArray[i].github}</a></p>
            </div>
            </div>
        `
    }

    // Html template
    let pageHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> Team Profiles </title>
            <link rel = "stylesheet" href = "style.css">
        </head>

        <body>
            <header> 
                <h2> Team Profiles </h2> 
            </header>
            <main>
                <div class = "container">
                    ${managerProfile}
                    ${engineerProfile}
                    ${internProfile}
                </div>
            </main>
        </body>
        </html>
    `
    
    // Use fs to generate HTML file
    fs.writeFile('./dist/index.html', pageHTML, (err) => {
        if (err) {
            console.log(err)
        }
    })
};

startUserPrompts();   