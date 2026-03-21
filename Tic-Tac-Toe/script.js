// Select all buttons and other elements
let buttons = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup-hide");
let resultText = document.getElementById("sample");
let restartBtn = document.getElementById("restart");
let newgameBtn = document.getElementById("new-game");

let currentPlayer = "X";
let gameGrid = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Function to handle button clicks
function handleButtonClick(index) {
    if (gameGrid[index] === "" && gameActive) {
        gameGrid[index] = currentPlayer;
        buttons[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Function to check if someone wins
function checkWinner() {
    const winCondition = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let condition of winCondition) {
        let [a, b, c] = condition;
        if (gameGrid[a] !== "" && gameGrid[a] === gameGrid[b] && gameGrid[b] === gameGrid[c]) {
            gameActive = false;
            showPopup(`${gameGrid[a]} wins!`);
            return;
        }
    }

    if (!gameGrid.includes("") && gameActive) {
        gameActive = false;
        showPopup("It's a Draw!!!");
    }
}

// Function to show popup
function showPopup(message) {
    popup.classList.remove("popup-hide");
    resultText.textContent = message;
}

// Function to restart the game
function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    buttons.forEach(button => button.textContent = "");
    popup.classList.add("popup-hide");
}



restartBtn.addEventListener("click", restartGame);
newgameBtn.addEventListener("click", restartGame);

buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleButtonClick(index));
});
