const inquirer = require("inquirer");

// INIT - prompts for Manager information
const getManager = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What's the manager's name?",
      },
      {
        name: "id",
        type: "number",
        message: "What's the manager's id?",
      },
      {
        name: "email",
        type: "input",
        message: "What's the manager's email address?",
      },
      {
        name: "office",
        type: "number",
        message: "What's the manager's office number?",
      },
    ])
    .then((manager) => {
      inquirer.prompt([
        {
          name: "emp_type",
          type: "list",
          message: "What type of employee would you like to add?",
          choices: ["Engineer", "Intern"],
        },
        {
            name: "emp_name",
            type: "input",
            message: "What's the employee's name?",
          },
          {
            name: "emp_id",
            type: "number",
            message: "What's the employee's id?",
          },
          {
            name: "emp_email",
            type: "input",
            message: "What's the employee's email address?",
          },
          {
            name: "eng_github",
            type: "input",
            message: "What's the engineer's Github Username?",
            when: (answers) => answers.emp_type === "Engineer",
          },
          {
            name: "int_school",
            type: "input",
            message: "What school does the intern attend?",
            when: (answers) => answers.emp_type === "Intern",
          },
      ]);
    });
};

getManager();
