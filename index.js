// Packages needed for this application
let inquirer = require("inquirer");
let fs = require("fs");
let Intern = require("./lib/Intern.js");
let Manager = require("./lib/Manager.js");
let Employee = require("./lib/Employee.js");
let Engineer = require("./lib/Engineer.js");
let generateHtml = require("./src/generateHtml.js");
let generateCss = require("./src/generateCss.js");

// Array collect roles that user can add. Based on the role some additional parameters will be asked
const teamChoices = ["Employee", "Manager", "Engineer", "Intern"];
// The team will be an array containing objects of employees (team members)
let team = [];

// initTeam() will be how we begin the application
const initTeam = () => {
  inquirer
    .prompt([
      {
        name: "start",
        type: "list",
        message:
          "Select role of team member you want to add to your team structure: ",
        choices: teamChoices,
      },
    ])
    .then((res) => {
      getRequiredInfo(res.start);
    });
};

// this function gets the user's name and adds it to the teamMember object
const getRequiredInfo = (role) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Team member id:",
      },
      {
        type: "input",
        name: "name",
        message: "Team member full name:",
      },
      {
        type: "input",
        name: "email",
        message: "Team member email address: ",
        validate: function (email) {
          valid =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              email
            );
          if (valid) {
            return true;
          } else {
            console.log(" - incorrect format. Please enter a valid email");
            return false;
          }
        },
      },
    ])
    .then((res) => {
      if (role === "Employee") {
        let employee = new Employee(res.id, res.name, res.email);
        team.push(employee);
        anotherTeamMember();
      } else if (role === "Manager") {
        let manager = new Manager(res.id, res.name, res.email);
        getOfficeNumber(manager);
      } else if (role === "Engineer") {
        let engineer = new Engineer(res.id, res.name, res.email);
        getGithubUserName(engineer);
      } else if (role === "Intern") {
        let intern = new Intern(res.id, res.name, res.email);
        getSchool(intern);
      }
    });
};

// request of the addiitonal questions based on the role
const getOfficeNumber = (manager) => {
  inquirer
    .prompt([
      {
        name: "officeNumber",
        message: "Manager Office Number:",
      },
    ])
    .then((res) => {
      manager.setOfficeNumber(res.officeNumber);
      team.push(manager);
      anotherTeamMember();
    });
};

const getGithubUserName = (engineer) => {
  inquirer
    .prompt([
      {
        name: "github",
        message: "GitHub Username:",
      },
    ])
    .then((res) => {
      engineer.setGithub(res.github);
      team.push(engineer);
      anotherTeamMember();
    });
};

const getSchool = (intern) => {
  inquirer
    .prompt([
      {
        name: "school",
        message: "Intern School name:",
      },
    ])
    .then((res) => {
      intern.setSchool(res.school);
      team.push(intern);
      anotherTeamMember();
    });
};

const anotherTeamMember = () => {
  inquirer
    .prompt([
      {
        name: "next",
        type: "confirm",
        message: "Do you want to add another team member to your team?",
      },
    ])
    .then((res) => {
      if (res.next) {
        initTeam();
      } else {
        writeToFile("./dist/index.html", team);
      }
    })
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.log(err));
};

// Function to generate HTML
function writeToFile(fileName, team) {
  let content = generateHtml(team);
  let cssFileContent = generateCss(
    "#FAF8EE",
    "#F2EDD7FF",
    "#6E6E6DFF",
    "#343148FF"
  );
  try {
    fs.writeFileSync(fileName, content);
    fs.writeFileSync("./dist/style.css", cssFileContent);
  } catch (error) {
    console.log("FAILED to generate files.");
    console.log(error);
  }
}

// Function call to initialize app
initTeam();
