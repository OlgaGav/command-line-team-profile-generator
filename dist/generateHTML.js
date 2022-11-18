//function to generate html page with team structure based on the received answers

function generateHTMLContent(data) {
  // if (data.length<1) {
  //   return (`no data provided. Expected the array of objects in format
  //   {id:'45',name:'john Smith',email:'sam@test.com',role:'Employee'}`)
  // }
  console.log(`data from generateHTMLContent`);
  console.log(data);

  let htmlContent = `<!DOCTYPE html>
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
</head>
<body class="background">
<header>
    <div class="jumbotron">
      <h1>My Team</h1>
    </div>
  </header>
  
  <div class="card-deck">`;

  for (let i = 0; i < data.length; i++) {
    let card = generateCard(data[i]);
    console.log(data[i]);
    htmlContent += card;
  }

  htmlContent += `</div></body></html>`;

  return htmlContent;
}



// teamMember objects, instance of Emloyee, Engineer, Intern or Manager classes
function generateCard(teamMember) {
  let cardHTML;
  if ((teamMember.role = "Employee")) {
    cardHTML = `<div class="card">
      <div class="card-header">
        <h3>${teamMember.name}</h3>
        <h4>${teamMember.role}</h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush"></ul>
        <li class="list-group-item">id: ${teamMember.id}</li>
        <li href="mailto:${teamMember.email}" class="list-group-item">email: ${teamMember.email}</li>
      </ul>
    </div>
    </div>`;
  } else if ((teamMember.role = "Engineer")) {
    cardHTML = `<div class="card">
      <div class="card-header">
        <h3>${teamMember.name}</h3>
        <h4>${teamMember.role}</h4>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush"></ul>
          <li class="list-group-item">id: ${teamMember.id}</li>
          <li href="mailto:${teamMember.email}" class="list-group-item">email: ${teamMember.email}</li>
          <li href="https://github.com/${teamMember.additionalParam}" class="list-group-item">GitHub: ${teamMember.additionalParam}</li>
        </ul>
      </div>
    </div>`;
  } else if ((teamMember.role = "Intern")) {
    cardHTML = `<div class="card">
      <div class="card-header">
        <h3>${teamMember.name}</h3>
        <h4>${teamMember.role}</h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush"></ul>
        <li class="list-group-item">id: ${teamMember.id}</li>
        <li href="mailto:${teamMember.email}" class="list-group-item">email: ${teamMember.email}</li>
        <li class="list-group-item">School: ${teamMember.additionalParam}</li>
      </ul>
    </div>
    </div>`;
  } else if ((teamMember.role = "Manager")) {
    cardHTML = `<div class="card">
      <div class="card-header">
        <h3>${teamMember.name}</h3>
        <h4>${teamMember.role}</h4>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush"></ul>
        <li class="list-group-item">id: ${teamMember.id}</li>
        <li href="mailto:${teamMember.email}" class="list-group-item">email: ${teamMember.email}</li>
        <li class="list-group-item">Office Number: ${teamMember.additionalParam}</li>
      </ul>
    </div>
    </div>`;
  }

  return cardHTML;
}

//--light: #bcdbdf;
//--deck_background: #feffdf;
//--card_background: #40a8c4;
//--dark: #596e79;

function generateCSSfile(light, deckBgr, cardBgr, dark) {
  return `:root{
    --light: ${light};
    --deck_background: ${deckBgr};
    --card_background: ${cardBgr};
    --dark: ${dark};
  }
  
    .background {
        background: var(--deck_background);
    }
  
    .card-header{
        background: var(--card_background);
    }
  
    .jumbotron{
        background: var(--dark);
        color: var(--light);
        text-align: center;
        padding: 1.5rem;
        border-radius: 0rem;
    }
  
    .list-group-item{
        background: var(--light);
    }
  
    .card-deck{
        padding: 1rem;
        justify-items: center;
    }
  
    .card {
        background-color: var(--card_background);
        flex: 0 1 20% !important;
        margin: 1rem !important;
  
    }`;
}
