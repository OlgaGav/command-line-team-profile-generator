//function to generate html page with team structure based on the received answers
function generateHtml(data) {

  let htmlContent = 
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" type="text/css" href="style.css"/>
      <title>Team Profile</title>
      <link rel="icon" type="image/x-icon" href="https://emoji.fileformat.info/png/1f3e2.png"/>
    </head>
    <body class="background">
      <header>
      <div class="jumbotron">
        <h1>My Team</h1>
        </div>
      </header>
    
      <div class="card-deck" id="card-field">`;

  for (let i = 0; i < data.length; i++) {
    let card = generateCard(data[i]);
    htmlContent += card;
  }

  htmlContent += "</div></body></html>"

  return htmlContent;
}

// teamMember objects, instance of Employee, Engineer, Intern or Manager classes
function generateCard(teamMember) {
  let cardHTML;
  let name = teamMember.getName();
  let role = teamMember.getRole();
  let id = teamMember.getId();
  let email = teamMember.getEmail();

  if (role === "Manager") {
    let number = teamMember.officeNumber;
    cardHTML =
    `<div class="card">
      <div class="card-header">
        <h4>${name}</h4>
        <h5> &#x1f4f1; Manager</h5>
      </div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">id: ${id}</li>
        <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${number}</li>
      </ul>
      </div>
    </div>`;    
  } else if (role === "Engineer") {
    let github = teamMember.github;
    cardHTML =
    `<div class="card">
      <div class="card-header">
        <h4>${name}</h4>
        <h5> &#128187; Engineer</h5>
      </div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">id: ${id}</li>
        <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${github}"> ${github}</a></li>
      </ul>
      </div>
    </div>`;
  } else if (role === "Intern") {
    let school = teamMember.school;
    cardHTML =
    `<div class="card">
      <div class="card-header">
        <h4>${name}</h4>
        <h5> &#x1f393; Intern</h5>
      </div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">id: ${id}</li>
        <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
      </div>
    </div>`;
  } else {
    cardHTML = 
    `<div class="card">
      <div class="card-header">
        <h4>${name}</h4>
        <h5>  &#127970; Employee</h5>
      </div>
      <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">id: ${id}</li>
        <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
      </ul>
      </div>
    </div>`;
  }
  return cardHTML;
}

// function generateCard(teamMember) {
  
//   let cardDiv = document.createElement("div");
//   cardDiv.className = "card";
//   let cardHeaderDiv = document.createElement("div");
//   cardHeaderDiv.className = "card-header";
//   cardDiv.appendChild(cardHeaderDiv);
//   let nameEl = document.createElement("h3");
//   nameEl.textContent = teamMember.name;
//   cardHeaderDiv.appendChild(nameEl);
//   let roleEl = document.createElement("h4");
//   roleEl.textContent = teamMember.role;
//   cardHeaderDiv.appendChild(roleEl);

//   //card content
//   let cardBodyDiv = document.createElement("div");
//   cardBodyDiv.className = "card-body";

//   let listUl = document.createElement("ul");
//   listUl.className = "list-group list-group-flush";
//   cardDiv.appendChild(listUl);

//   let idEl = document.createElement("li");
//   idEl.className = "list-group-item";
//   idEl.textContent = teamMember.id;
//   listUl.appendChild(idEl);

//   let emailEl = document.createElement("li");
//   emailEl.className = "list-group-item";
//   emailEl.setAttribute("href",`mailto:${teamMember.email}`);
//   emailEl.textContent = `email: ${teamMember.email}`;
//   listUl.appendChild(idEl);

//   let additonalEl = document.createElement("li");
//   additonalEl.className = "list-group-item";
//   listUl.appendChild(additonalEl);

//   if (teamMember.role = "Engineer") {
//     additonalEl.setAttribute("href", `https://github.com/${teamMember.github}`);
//     additonalEl.textContent = `GitHub: ${teamMember.github}`;
//   } else if ((teamMember.role = "Intern")) {
//     additonalEl.textContent = `School: ${teamMember.school}`;
//   } else if (teamMember.role = "Manager") {
//     additonalEl.textContent = `Office Number: ${teamMember.officeNumber}`;
//   }

//   return cardHTML;
// }

module.exports = generateHtml;