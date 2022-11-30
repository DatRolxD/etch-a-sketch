//initialize variables
const main = document.querySelector('main');
const container = document.querySelector('#container');
const four = document.querySelector('#four');
const eight = document.querySelector('#eight');
const sixteen = document.querySelector('#sixteen');
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);
let number = 1; 

function createGrid(){
  const gridSize = number * number;
  for (let i = 1; i <= gridSize; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

function removeGrid(){
  for (const square of getSquares()){
    container.removeChild(square);
  }
}

four.addEventListener('click', ()=>{
  number = 4;
  container.classList.remove(...container.classList);
  container.classList.add('four');
  removeGrid();
  createGrid();
  squaresEvent();
});

eight.addEventListener('click', ()=>{
  number = 8;
  container.classList.remove(...container.classList);
  container.classList.add('eight');
  removeGrid();
  createGrid();
  squaresEvent();
});

sixteen.addEventListener('click', ()=>{
  number = 16;
  container.classList.remove(...container.classList);
  container.classList.add('sixteen');
  removeGrid(); 
  createGrid();
  squaresEvent();
});

function squaresEvent(){
  for(const square of getSquares()){
    square.addEventListener('mouseover', ()=>{
      square.classList.add('black');
    });
  }
}

function getSquares(){
  const squares = document.querySelectorAll('.square');
  return squares;
}

function clear(){
  for (const square of getSquares()){
    square.classList.remove('black');
  }
}


