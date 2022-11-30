// create general consts
const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const makeNewGrid = document.querySelector('#grid-maker');
clearBtn.addEventListener('click', clear);
makeNewGrid.addEventListener('click', createGrid)

for (let i = 1; i <= 256; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.textContent = i;
  container.appendChild(square);
}

function removeGrid(){
  const squares = document.querySelectorAll('#container>div');
  for (const square of squares){
    container.removeChild(square);
  }
}

function createGrid(){
  removeGrid();
  let userNumber = prompt();
  for (let i = 1; i <= userNumber * userNumber; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i;
    container.appendChild(square);
  }
  squaresChangeColor();
  
};


function squaresChangeColor(){
  const squares = document.querySelectorAll('.square');
  for (const square of squares){
    square.addEventListener('mouseover', changeColor);
    function changeColor(){
      square.classList.add('black');
    }
  }
}

function clear(){
  const squares = document.querySelectorAll('.square');
  for (const square of squares){
    square.classList.remove('black');
  }
}

squaresChangeColor();








