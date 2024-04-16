let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBox = document.querySelector("#user-score"); 
const compScoreBox = document.querySelector("#comp-score"); 
const reset = document.querySelector(".reset-btn");


reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play Your move";
    msg.style.backgroundColor = "black";
    userScoreBox.innerText = "0";
    compScoreBox.innerText = "0";
});

const compPick = () => {
    const option = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return option[idx];
}

const gameDraw = () => {
    console.log("Game Was Draw");
    msg.style.backgroundColor = "black";
    msg.innerText = "Draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        console.log("you won");
        userScoreBox.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `Your ${userChoice} beats ${compChoice}`;
    }
    else {
        compScore++;
        console.log("you lost");
        compScoreBox.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `Your ${userChoice} lost against ${compChoice}`;
    }
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = compPick();
    console.log("comp choice", compChoice);

    // compare choices 

    if(userChoice === compChoice) {
        gameDraw();
    }
    else {

        let userWin = true;
        //for rock
        if(userChoice === "rock") {
            userWin = compChoice === "scissor" ? true : false;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});