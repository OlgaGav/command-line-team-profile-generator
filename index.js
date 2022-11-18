// Packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
let Intern = require('./lib/Intern.js');
let Manager = require('./lib/Manager.js');
let Employee = require('./lib/Employee.js');
let Engineer = require('./lib/Engineer.js');
let generateHtml = require('./src/generateHtml.js');
let generateCss = require('./src/generateCss.js');

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
        message: "Select role of team member you want to add to your team structure: ",
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
        type: 'input',
        name: "id",
        message: "Team member id:",
      },
      {
        type: 'input',
        name: "name",
        message: "Team member full name:",
      },
      {
        type: 'input',
        name: 'email',
        message: 'Team member email address: ',
        validate: function (email) {
          valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
          if (valid) {
              return true;
          } else {
              console.log(" - incorrect format. Please enter a valid email")
              return false;
          }
        }
      },      
    ])
    .then((res) => {
      let member = new Employee(res.id, res.name, res.email);
      if (role === "Employee") {
        team.push(member);
        anotherTeamMember();
      } else if (role === "Manager") {
        getOfficeNumber(member);
      } else if (role === "Engineer") {
        getGithubUserName(member);
      } else if (role === "Intern") {
        getSchool(member);
      }
    });
};

// request of the addiitonal questions based on the role
const getOfficeNumber = (member) => {
  inquirer
    .prompt([
      {
        name: "officeNumber",
        message: "Manager Office Number:",
      },
    ])
    .then((res) => {
      let manager = new Manager(member.id, member.name, member.email, res.officeNumber);
      team.push(manager);
      anotherTeamMember();
    });
};

const getGithubUserName = (member) => {
  inquirer
    .prompt([
      {
        name: "github",
        message: "GitHub Username:",
      },
    ])
    .then((res) => {
      let engineer = new Engineer(member.id, member.name, member.email, res.github);
      team.push(engineer);
      anotherTeamMember();
    });
};

const getSchool = (member) => {
  inquirer
    .prompt([
      {
        name: "school",
        message: "Intern School name:",
      },
    ])
    .then((res) => {
      let intern = new Intern(member.id, member.name, member.email, res.school);
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
        team = JSON.stringify(team);

        console.log(`=========FINILIZED TEAM ARRAY=========`);
        console.log(team);

        writeToFile('./dist/index.html', team);
      }
    })
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.log(err));
};


// Function to generate HTML
function writeToFile(fileName, team) {
    let content = generateHtml(team);
    let cssFileContent = generateCss('#bcdbdf', '#feffdf', '#40a8c4', '#596e79');
    try {
        fs.writeFileSync(fileName, content);
        fs.writeFileSync('./dist/style.css', cssFileContent);
    } catch (error) {
        console.log('FAILED to generate files.');
        console.log(error);
    }
}

// Function call to initialize app
initTeam();
