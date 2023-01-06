const getPlayerValue = () => {
    return document.querySelector('input[name="rps"]:checked').getAttribute('value');
}


const getComputerChoice = () => {
    getPlayerValue();
    if (Math.floor(Math.random() * 3) === 0){
        return "Rock";    
    } else if (Math.floor(Math.random() * 3) === 1) {
        return "Paper";
    }
    return "Scissors";
}

