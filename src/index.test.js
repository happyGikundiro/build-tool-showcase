import tools from "../data/tools.json";

describe("Tool Display", () => {
  beforeAll(() => {
    document.body.innerHTML = `<main id="content"></main>`;
    const content = document.getElementById("content");

    tools.forEach((tool) => {
      const toolElement = document.createElement("div");
      toolElement.innerHTML = `<p>${tool.name}</p>`;
      content.appendChild(toolElement);
    });
  });

  test("should display tool names", () => {
    const toolElements = document.querySelectorAll("#content p");
    expect(toolElements.length).toBe(tools.length);

    tools.forEach((tool, index) => {
      expect(toolElements[index].textContent).toBe(tool.name);
    });
  });
});
