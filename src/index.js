import tools from "./data/tools.json";
import "./styles/styles.scss";

const content = document.getElementById("content");
tools.forEach((tool) => {
  const toolElement = document.createElement("div");
  toolElement.innerHTML = `<p>${tool.name}</p>`;
  content.appendChild(toolElement);
});
