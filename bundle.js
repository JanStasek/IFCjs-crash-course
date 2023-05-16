var projects$1 = [
	{
		projectId: 1,
		projectName: "Projekt 1",
		projectDescription: "Popis projektu 1",
		projectIfcRoute: ""
	},
	{
		projectId: 2,
		projectName: "Projekt 2",
		projectDescription: "Popis projektu 2",
		projectIfcRoute: ""
	},
	{
		projectId: 3,
		projectName: "Projekt 3",
		projectDescription: "Popis projektu 3",
		projectIfcRoute: ""
	},
	{
		projectId: 4,
		projectName: "Projekt 4",
		projectDescription: "Popis projektu 4",
		projectIfcRoute: ""
	},
	{
		projectId: 5,
		projectName: "Projekt 5",
		projectDescription: "Popis projektu 5",
		projectIfcRoute: ""
	}
];
var database = {
	projects: projects$1
};

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
    projectInfo.textContent = project["projectDescription"];

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
    });

    return card;
}
