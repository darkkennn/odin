const x_class = 'x';
const circle_class = 'circle';
const winningMessageElement = document.getElementById('winning-message');
const winningMessageTextElement = document.querySelector('[data-winning-text-message]');
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const inputBox = document.getElementById('input-box');
const restartButton = document.getElementById('restart');
const submitButton = document.getElementById('send');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const heading = document.getElementById('heading');
const winning_combinations = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let circleturn = false;
let p1count = 0;
let p2count = 0;

startGame();

submitButton.addEventListener('click', submit);
restartButton.addEventListener('click', startGame);

function submit(){
    heading.innerText = `Tic Tac Toe \n ${p1.value} ${p1count} vs ${p2.value} ${p2count}`;
}

function startGame(){
    cellElements.forEach(cell => {
        cell.classList.remove(x_class);
        cell.classList.remove(circle_class);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {once: true})
    })
    circleturn = false;
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
    heading.innterText = `Tic Tac Toe`;
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleturn ? circle_class : x_class;
    //marker
    placeMark(cell, currentClass);

    //checking win
    if(checkWin(currentClass)){
        endGame(false);
    } else if(isDraw()){
        endGame(true);
    } else{
        swapTurns();
        setBoardHoverClass();
    }
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}


function swapTurns() {
    circleturn = !circleturn;
}

function setBoardHoverClass(){
    board.classList.remove(x_class);
    board.classList.remove(circle_class);
    if(circleturn){
        board.classList.add(circle_class);
    } else{
        board.classList.add(x_class);
    }
}

function checkWin(currentClass){
    return winning_combinations.some(combination =>{
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = 'Draw!!';
    } else {
        winningMessageTextElement.innerText = `${circleturn} ? ${p2.value} ${p2count++} : ${p1.value}'s ${p1count++} win!!`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(circle_class);
    })
}