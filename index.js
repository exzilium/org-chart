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
      console.log("add data to array" + manager)
       chooseEmployee();
    });
};

// CHOOSE EMPLOYEE

const chooseEmployee = () => {
    inquirer
      .prompt([
        {
          name: "emp_type",
          type: "list",
          message: "What type of employee would you like to add?",
          choices: ["Engineer", "Intern", "Finished"],
        },
      ])
      .then((answer) => {
        if (answer.emp_type === "Finished") {
          console.log("finished");
          return;
        } else if (answer.emp_type === "Engineer") {
            console.log(answer.emp_type + " has been selected");
             getEngineer();
        } 
        else {
          console.log(answer.emp_type + " has been selected");
          getIntern();
        }
      });
  };

// GET ENGINEER
const getEmployee = () => {
  inquirer
    .prompt([
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
      },
    ])
    .then((answers) => {
      console.log("add answer to array and run function" + answers);
      chooseEmployee();
    });
};

// GET INTERN
const getIntern = () => {
  inquirer
    .prompt([
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
        name: "int_school",
        type: "input",
        message: "What school does the intern attend?",
      },
    ])
    .then((answers) => {
      console.log("add answer to array and run function" + answers);
      chooseEmployee();
    });
};

getManager();
