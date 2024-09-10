import tools from './data/tools.json';
import './styles/styles.scss';

const loadTools = () => {
  const content = document.getElementById('content');
  if (!content) {
    return;
  }

  tools.forEach((tool) => {
    const toolElement = document.createElement('div');
    toolElement.innerHTML = `
      <h2>${tool.name}</h2>
      <p>${tool.description}</p>
    `;
    content.appendChild(toolElement);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  loadTools();
});

export default loadTools;
