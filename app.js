let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()* 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#2A2B2A"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generate computer choice -> modular i.e different functions for different tasks
    const compChoice = genCompChoice();
    
    if(userChoice===compChoice) {
        // Draw Game
       drawGame();
    } else {
        let userWin = true;
        if(userChoice==="stone") {
            //scissors, paper
            userWin = compChoice==="paper" ? false : true; 
        } else if(userChoice=== "paper") {
            //stone, scissors
            userWin = compChoice === "scissors" ? false : true; 
        } else {
            //stone, paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});