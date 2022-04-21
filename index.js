// import inquirer
const inquirer = require("inquirer");
const fs = require("fs");
//ask the the questions
inquirer.prompt([
    {
        type:"input",
        message:"What is your name?",
        name:"userName",
    },
    {
        type:"input",
        message:"where do you live?",
        name:"loc",
    },
    {
        type:"input",
        message:"Tell me about your bio?",
        name:"bio",
    },
    {
        type:"input",
        message:"What is your Github URL?",
        name:"github",
    },
    {
        type:"input",
        message:"What is your Linkedln URL?",
        name:"linkedln",
    },
    {
        type:"input",
        message:"What is your email?",
        name:"email",
    },
    {
        type:"checkbox",
        message:"What languages that you able to use?>",
        choices:["HTML","CSS","Javascript","C++","Python","Java"],
        name:"languages",
    },
  ]).then(function({userName,loc,bio,github,linkedln,email,languages}) {

    let generatePortfolio = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>Portfolio generator</h1>
        </header>
        <main>
            <div class="Name">
                <h1>Name:</h1>
                <h2>${userName}</h2>
            </div>
            <div class="location">
                <h1>Location</h1>
                <h2>${loc}</h2>
            </div>
            <div class="Bio">
                <h1>My Bio</h1>
                <h2>${bio}</h2>
            </div>
            <div class="languages">
                <h1>What languages that i able to use</h1>
                <h2>${languages}</h2>
            </div>
            <div class="contact">
                <a href="${github}">Github URL</a>
                <a href="${linkedln}">LinkedIn URL</a>
                <a href="mailto:${email}">Email me</a>
            </div>
        </main>
    </body>
    </html>
    `
    console.log(generatePortfolio);

    fs.writeFileSync(`${userName}.html`,generatePortfolio)
  });
