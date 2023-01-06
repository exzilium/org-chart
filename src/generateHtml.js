// Use filter check if the employee is a manager, intern, engineer. Generate cards and add to html
function renderCards(teamData) {
  // HTML array to join all rendered employee cards
  const finalHtml = [];
  // Employee functions to generate html cards

  // MANAGER
  function managerHtml(manager) {
    return `
    <div class="col-4 mb-3">
        <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${manager.getName()}</h5>
              <p class="card-text">${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: ${manager.getEmail()}</li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
  }
  // ENGINEER
  function engineerHtml(engineer) {
    return `
    <div class="col-4 mb-3">
           <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${engineer.getName()}</h5>
              <p class="card-text">${engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: ${engineer.getEmail()}</li>
              <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
          </div>
        </div>
    `;
  }
  // Intern
  function internHtml(intern) {
    return `
    <div class="col-4 mb-3">
           <div class="card shadow">
            <div class="card-body text-bg-primary">
              <h5 class="card-title">${intern.getName()}</h5>
              <p class="card-text">${intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: ${intern.getEmail()}</li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
    `;
  }

  // Add manager data to finalHTML
  finalHtml.push(
    ...teamData
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerHtml(manager))
  );

  // Add engineer data to finalHTML
  finalHtml.push(
    ...teamData
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerHtml(engineer))
  );

  // Add intern data to finalHTML
  finalHtml.push(
    ...teamData
      .filter((intern) => intern.getRole() === "Intern")
      .map((intern) => internHtml(intern))
  );

  return finalHtml.join("");
}

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Organization Chart</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="bg-dark text-light text-center pt-3 pb-3 mb-3">
      <h1>My Team</h1>
    </header>
    <main>
        <div class="container justify-content-center w-50">
            <div class="row justify-content-center">
                ${renderCards(team)}
            </div>
        </div>
    </div>
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    `;
};
