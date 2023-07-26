
const gridContainer = document.querySelector("#grid-container");

const createSquareDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");

  return newDiv;
}

const createGrid = (num) => {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const squareDiv = createSquareDiv();
      gridContainer.appendChild(squareDiv);
    }
  }
}

createGrid(16);