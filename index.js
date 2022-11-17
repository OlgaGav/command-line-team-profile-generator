// Packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
let generateHTML = require ('./dist/generateHTML');

// Array collect roles that user can add. Based on the role some additional parameters will be asked
const teamChoices = ["Employee", "Manager", "Engineer", "Intern", "Exit"];
// The team will be an array containing objects of employees (team members)
let team = [];
let teamMember;

// This function allows us to reset the teamMember object for re-use in an team
const clearTeamMember = () => {
  // here we define an empty teamMember object
  teamMember = {
    id: "",
    name: "",
    email: "",
    role: "",
    additionalParam: "",
  };
};

// initTeam() will be how we begin the application
const initTeam = () => {
  inquirer
    .prompt([
      {
        name: "start",
        type: "list",
        message: "Select role of team member you want to add to your team structure or 'Exit' to finish the process: ",
        choices: teamChoices,
      },
    ])
    .then((res) => {
      if (res.start === "Exit") {
        return;
      } else {
        clearTeamMember();
        teamMember.role = res.start;
        getRequiredInfo();
      }
    });
};

// this function gets the user's name and adds it to the teamMemeber object
const getRequiredInfo = () => {
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
      teamMember.id = res.id;
      teamMember.name = res.name;
      teamMember.email = res.email;

      if (teamMember.role === "Employee") {
        team.push(teamMember);
        anotherTeamMember();
      } else if (teamMember.role === "Manager") {
        getOfficeNumber();
      } else if (teamMember.role === "Engineer") {
        getGithubUserName();
      } else if (teamMember.role === "Intern") {
        getSchool();
      }

    });
};

// request of the addiitonal questions based on the role
const getOfficeNumber = () => {
  inquirer
    .prompt([
      {
        name: "officeNumber",
        message: "Manager Office Number:",
      },
    ])
    .then((res) => {
      teamMember.additionalParam = res.officeNumber;
      team.push(teamMember);
      anotherTeamMember();
    });
};

const getGithubUserName = () => {
  inquirer
    .prompt([
      {
        name: "github",
        message: "GitHub Username:",
      },
    ])
    .then((res) => {
      teamMember.additionalParam = res.github;
      team.push(teamMember);
      anotherTeamMember();
    });
};

const getSchool = () => {
  inquirer
    .prompt([
      {
        name: "school",
        message: "Intern School name:",
      },
    ])
    .then((res) => {
      teamMember.additionalParam = res.school;
      team.push(teamMember);
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
        clearTeamMember();
        initTeam();
      } else {
        // this is to confirm team object
        console.log("Your team:", team);
        answers = JSON.stringify(team);
        writeToFile('index.html', answers);
      }
    })
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.log(err));
};


// Function to generate HTML
function writeToFile(fileName, answers) {
    data = JSON.parse(answers);
    let content = generateHTML(data);
    
    try {
        fs.writeFileSync(fileName, content);
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
initTeam();
