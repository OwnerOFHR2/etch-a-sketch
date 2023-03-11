let color = 'black';

function createBoard(size) {
    let board = document.querySelector('.board');
    let resetSquares = board.querySelectorAll('div');
    resetSquares.forEach((div) => div.style.backgroundColor = 'white');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let amount = size * size; 

for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorTheSquares);
    square.style.border = '1px solid #f3f3f3';
    square.style.backgroundClip = 'padding-box';
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square);
}
};

function resetBoard() {
    let board = document.querySelector('.board');
    let resetSquares = board.querySelectorAll('div');
    resetSquares.forEach((div) => div.style.backgroundColor = 'white');
}

createBoard(32);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createBoard(input);
    }
    else {
        alert('Input Not Allowed');
    }

}

function colorTheSquares() {
    if (color === 'random') {
        let red = Math.floor(Math.random() * 320);
        let green = Math.floor(Math.random() * 320);
        let blue = Math.floor(Math.random() * 320);
    
        let randomColor = `rgb(${red}, ${green}, ${blue})`;
        this.style.backgroundColor = randomColor;
        } else {
            this.style.backgroundColor = color; 
        }
}

function changeColor(choice) {
        color = choice;
}