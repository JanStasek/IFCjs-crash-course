import database from "./src/database/projects.json" assert { type: "json" };
import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

//console.log(database);

let projects = database.projects;

//console.log(projects);

const projectCard = document.getElementById("project-card-container");

console.log(projectCard);

if (projectCard !== null) {
  for (const project of projects) {
    const card = createCard(project);
    projectCard.appendChild(card);
  }
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
  card.target = "_blank";
  card.appendChild(projectName);
  card.appendChild(projectInfo);

  card.addEventListener("click", () => {
    if (lastCard) {
      lastCard.classList.remove("selected-card");
    }

    card.classList.add("selected-card");
    lastCard = card;
  });

  return card;
}

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

//console.log(id);

const link = projects[id]["projectIfcRoute"];

//console.log(link);

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({
  container,
  backgroundColor: new Color(0xffffff),
});
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
  await viewer.IFC.setWasmPath("../../../");
  const model = await viewer.IFC.loadIfcUrl(url);
  viewer.shadowDropper.renderShadow(model.modelID);
}

loadIfc(link);
