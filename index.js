import database from "./src/database/projects.json" assert { type: 'json' };

//console.log(database);

let projects = database.projects;

//console.log(projects);

const projectCard = document.getElementById("project-card-container");

//console.log(projectCard);

for(const project of projects) {
    const card = createCard(project);
    projectCard.appendChild(card);
}

let lastCard;

function createCard(project) {
    const projectName = document.createElement("h4");
    projectName.textContent = project["projectName"];

    const projectInfo = document.createElement("p");
    projectInfo.textContent = project["projectDescription"]

    const card = document.createElement("a");
    card.classList.add("card");
    const link = "viewer.html" + "?id=" + project["projectId"];
    card.href = link;
    card.target ="_blank";
    card.appendChild(projectName);
    card.appendChild(projectInfo);

    card.addEventListener("click", () => {
        if(lastCard) {
            lastCard.classList.remove("selected-card");
        }

        card.classList.add("selected-card");
        lastCard = card;
    })

    return card;
}