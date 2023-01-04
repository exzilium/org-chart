const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

// Global array for storing employee objects
employeeList = [];

// INIT - GET MANAGER
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
    .then((data) => {
      // Create new manager object
      const manager = new Manager(data.name, data.id, data.email, data.office);
      // push new manager to the employeeList arr
      employeeList.push(manager);
      console.log(employeeList);
      console.log(employeeList[0].getRole());

      // Add next employee or finish workflow
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
        console.log(employeeList);
        writeFile();
        return;
      } else if (answer.emp_type === "Engineer") {
        console.log(answer.emp_type + " has been selected");
        getEngineer();
      } else {
        console.log(answer.emp_type + " has been selected");
        getIntern();
      }
    });
};

// GET ENGINEER
const getEngineer = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What's the employee's name?",
      },
      {
        name: "id",
        type: "number",
        message: "What's the employee's id?",
      },
      {
        name: "email",
        type: "input",
        message: "What's the employee's email address?",
      },
      {
        name: "github",
        type: "input",
        message: "What's the engineer's Github Username?",
      },
    ])
    .then((data) => {
      // Create new engineer object
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      // push new manager to the employeeList arr
      employeeList.push(engineer);
      chooseEmployee();
    });
};

// GET INTERN
const getIntern = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What's the employee's name?",
      },
      {
        name: "id",
        type: "number",
        message: "What's the employee's id?",
      },
      {
        name: "email",
        type: "input",
        message: "What's the employee's email address?",
      },
      {
        name: "school",
        type: "input",
        message: "What school does the intern attend?",
      },
    ])
    .then((data) => {
      // Create new intern object
      const intern = new Intern(data.name, data.id, data.email, data.school);
      // push new manager to the employeeList arr
      employeeList.push(intern);
      chooseEmployee();
    });
};

// Write file and exit app
const writeFile = () => {
 
  let html = 
 
  fs.writeFile;
  employeeList.forEach((element) => {});
};

// INIT
getManager();
