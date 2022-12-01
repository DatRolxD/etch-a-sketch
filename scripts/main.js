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

function getSquares(){
  const squares = document.querySelectorAll('.square');
  return squares;
}

function clear(){
  for (const square of getSquares()){
    square.classList.remove(...square.classList);
    square.style.backgroundColor = '';
    square.classList.add('square');
  }
}

const colours = ['red', 'green', 'blue'];
console.log(colours[Math.floor(Math.random() * colours.length)]);

let randomRgb = [255, 255, 255];
function randomColor(){
  randomRgb[0] = Math.floor(Math.random() * 255);
  randomRgb[1] = Math.floor(Math.random() * 255);
  randomRgb[2] = Math.floor(Math.random() * 255);
  return randomRgb;
}
const pickerColor = document.querySelector('#color-picker');
pickerColor.addEventListener('input', ()=>{
  
});

let inColor = false;
const coloursBtn = document.querySelector('#colours');
const blackBtn = document.querySelector('#black');
coloursBtn.addEventListener('click', ()=>{
  inColor = true;
  squaresEvent();
  blackBtn.classList.remove('selected-black');
  coloursBtn.classList.add('selected-color');
});
blackBtn.addEventListener('click', ()=>{
  inColor = false;
  squaresEvent();
  coloursBtn.classList.remove('selected-color');
  blackBtn.classList.add('selected-black');
});

console.log(`rgb(${randomColor()[0]}, ${randomColor()[1]}, ${randomColor()[2]})`);

function squaresEvent(){
  if (inColor === true){
    for(const square of getSquares()){
      square.addEventListener('mouseover', ()=>{
        square.classList.remove(...square.classList);
        square.classList.add('square');
        square.style.backgroundColor = `rgb(${randomColor()[0]}, ${randomColor()[1]}, ${randomColor()[2]})`;
        //square.classList.add(colours[Math.floor(Math.random() * colours.length)]);
      });
    }
  }
  else {
    for(const square of getSquares()){
      square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = '';
        square.classList.add('square');
        square.classList.add('black');
      });
  }
}
};

