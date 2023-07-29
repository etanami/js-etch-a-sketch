
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".clear");

const createSquareDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");

  return newDiv;
}

// create grid function
const createGrid = (num) => {
  gridContainer.innerHTML = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const squareDiv = createSquareDiv();
      gridContainer.appendChild(squareDiv);
    }
  }

  gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}

// default grid
createGrid(16);


// event listener to change background color on hover using event delegation
gridContainer.addEventListener('mouseover', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('box')) {
    e.target.style.backgroundColor = 'black';
  }
});


// reset button to create new  user custom sketch pad
resetBtn.addEventListener("click", e => {
  e.preventDefault();
  const squares = parseInt(prompt("How many squares per side would you like?"));

  if (squares <= 100) {

    changeGridSize(squares);
  } else {
    alert("Enter value betweeen 1 and 100");
  }
});

const clearGrid = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = 'white';
  });
}

// clear button to wipe of the sketch pad
clearBtn.addEventListener("click", clearGrid);

const changeGridSize = (num) => {
  createGrid(num);
}
