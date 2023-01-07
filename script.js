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

// To turn the Play btn on when a choice is made
const turnOnBtn = () => {
    const btn = document.querySelector('.btn');
    const radios = document.querySelectorAll('input[name="rps"]');
    radios.forEach(radio => radio.addEventListener('change', () => {
       if(btn.getAttribute('disabled')) btn.removeAttribute('disabled');
    }));
}

turnOnBtn();