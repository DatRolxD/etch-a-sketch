// create general consts
const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const makeNewGrid = document.querySelector('#make-new-grid');

for (let i = 1; i <= 256; i++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.textContent = i;
  container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

for (const square of squares){
  square.addEventListener('mouseover', changeColor);
  function changeColor(){
    square.classList.add('black');
  }
}

function clear(){
  for (const square of squares){
    square.classList.remove('black');
  }
}


clearBtn.addEventListener('click', clear);







