let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoresPara = document.querySelector("#user-score");
const compScoresPara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText="Game was drawn! Play again.";
    msg.style.backgroundColor="orange";
}

const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoresPara.innerText=userScore;
        msg.innerText='You win! Your ' + userChoice + ' beats ' + compChoice + '.';
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoresPara.innerText=compScore;
        msg.innerText='You lost! ' + compChoice + ' beats your ' + userChoice + '.';
        msg.style.backgroundColor="red";
    }
};

const playGame =(userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissor"? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});