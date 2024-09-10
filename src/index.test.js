/* eslint-disable no-undef */
jest.mock('./data/tools.json', () => [
  { name: 'Webpack', description: 'A module bundler' },
  { name: 'Babel', description: 'A JavaScript compiler' },
  { name: 'ESLint', description: 'A linter for JavaScript' },
]);

jest.mock('./styles/styles.scss', () => {});

const loadTools = () => {
  const content = document.getElementById('content');
  const tools = require('./data/tools.json');

  tools.forEach((tool) => {
    const toolElement = document.createElement('div');
    toolElement.innerHTML = `
          <h2>${tool.name}</h2>
          <p>${tool.description}</p>
        `;
    content.appendChild(toolElement);
  });
};

describe('loadTools function', () => {
  beforeEach(() => {
    document.body.innerHTML = `<main id="content"></main>`;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('check if tools list is correct', () => {
    const tools = require('./data/tools.json');
    expect(tools.length).toBe(3);
    expect(tools[0].name).toBe('Webpack');
  });

  test('should display tools in the DOM', () => {
    loadTools();
    const content = document.getElementById('content');
    expect(content).not.toBeNull();

    const toolElements = content.querySelectorAll('div');
    expect(toolElements.length).toBe(3);

    const toolNames = Array.from(toolElements).map(
      (el) => el.querySelector('h2').textContent
    );
    expect(toolNames).toEqual(['Webpack', 'Babel', 'ESLint']);

    const toolDescriptions = Array.from(toolElements).map(
      (el) => el.querySelector('p').textContent
    );
    expect(toolDescriptions).toEqual([
      'A module bundler',
      'A JavaScript compiler',
      'A linter for JavaScript',
    ]);
  });
});
