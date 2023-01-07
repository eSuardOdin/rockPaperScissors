// Returns the player's choice as string
const getPlayerChoice = () => {
    return document.querySelector('input[name="rps"]:checked').getAttribute('value');
}


// Returns the computer choice as string
const getComputerChoice = () => {
    getPlayerChoice();
    if (Math.floor(Math.random() * 3) === 0){
        return "Rock";    
    } else if (Math.floor(Math.random() * 3) === 1) {
        return "Paper";
    }
    return "Scissors";
}

// To turn the Play btn on when a choice is made
const turnOnBtn = () => {
    const btn = document.querySelector('.btn');
    const radios = document.querySelectorAll('input[name="rps"]');
    radios.forEach(radio => radio.addEventListener('change', () => {
       if(btn.getAttribute('disabled')) btn.removeAttribute('disabled');
    }));
}

// Turn on button calls
turnOnBtn();


// Update the score on the index.html
const updateScore = (res) => {
    const humanScore = document.querySelector('#hum-score');
    const computerScore = document.querySelector('#com-score');
    let humanScoreNb = Number(document.querySelector('#hum-score').innerHTML);
    let computerScoreNb = Number(document.querySelector('#com-score').innerHTML);
    // If computer wins
    if (res < 0) {
        computerScoreNb += Math.abs(res);
    } else {
        humanScoreNb += res;
    }
    humanScore.innerHTML = humanScoreNb;
    computerScore.innerHTML = computerScoreNb;
}

const computeWinner = (huM, coM) => {
    if( // Win
        huM === "Rock" && coM === "Scissors" ||
        huM === "Scissors" && coM === "Paper" ||
        huM === "Paper" && coM === "Rock") {
            return 1;
    } else if( //Lose
        coM === "Rock" && huM === "Scissors" ||
        coM === "Scissors" && huM === "Paper" ||
        coM === "Paper" && huM === "Rock") {
            return -1;
        }
    return 0; //Draw
}


const playRound = () => {
    const playerMove = getPlayerChoice();
    const comMove = getComputerChoice();
    console.log(`
    Player : ${playerMove}
    Computer : ${comMove}
    `);

    updateScore(computeWinner(playerMove, comMove));
}