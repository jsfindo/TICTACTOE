let GameBoard = []
 



function createPlayer1(name1){

    return { name:name1, positions:[]}
}

function createPlayer2(name2){
    
    return { name:name2, positions:[]}
}

let player1 = createPlayer1(prompt("enter player 1 name:"))
let player2 = createPlayer2(prompt("enter player 2 name:"))

const nameplate1 = document.createElement("h2")
nameplate1.innerText = player1.name + ": O"
document.body.appendChild(nameplate1)

const nameplate2 = document.createElement("h2")
nameplate2.innerText = player2.name + ": X"
document.body.appendChild(nameplate2)

const spot1 = document.getElementById("0")
const spot2 = document.getElementById("1")
const spot3 = document.getElementById("2")
const spot4 = document.getElementById("3")
const spot5 = document.getElementById("4")
const spot6 = document.getElementById("5")
const spot7 = document.getElementById("6")
const spot8 = document.getElementById("7")
const spot9 = document.getElementById("8")

 let player = 1

 function changePlayer(){
    if (player === 1) {
    player = 2;
} else {
    player = 1;
}
 }

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Ddevice-widthiagonals
]

let winner = ""

function checkForWinner(){
    for(const pattern of winPatterns){
        const isMatch1 = pattern.every(pos => player1.positions.includes(pos))
        const isMatch2 = pattern.every(pos => player2.positions.includes(pos))

        if(isMatch1){
            winner = player1
            return  // stop checking once a winner is found
        } else if(isMatch2){
            winner = player2
            return
        }
    }  
}

function checkForTie(){
    if(GameBoard.length === 9 && winner === ""){
        alert("It's a tie!")
    }
}

function  click(square){
    if(GameBoard[square-1] === undefined && player == 1){

        GameBoard[square-1] = player
        player1.positions.push(square - 1)
        changePlayer()
        const spot = document.getElementById(square -1)
        spot.classList.add("one");
        checkForWinner()
        if(winner != ""){
            alert(`${player1.name} is the winner`)
        }
        checkForTie()

    } else if((GameBoard[square-1] === undefined && player == 2)){
        GameBoard[square-1] = player
        player2.positions.push(square - 1)
        changePlayer()
        const spot = document.getElementById(square -1)
        spot.classList.add("two");
        checkForWinner()
        if(winner != ""){
            alert(`${player2.name} is the winner`)
        }
        checkForTie()
    }

}

spot1.addEventListener("click", () => click(1))
spot2.addEventListener("click", () => click(2))
spot3.addEventListener("click", () => click(3))
spot4.addEventListener("click", () => click(4))
spot5.addEventListener("click", () => click(5))
spot6.addEventListener("click", () => click(6))
spot7.addEventListener("click", () => click(7))
spot8.addEventListener("click", () => click(8))
spot9.addEventListener("click", () => click(9))

const resetButton = document.createElement("button")
resetButton.innerText = "Reset"
document.body.appendChild(resetButton)

resetButton.addEventListener("click", () => {
    // Reset game state
    GameBoard = []
    player = 1
    winner = ""
    player1.positions = []
    player2.positions = []

    // Clear the board visually
    for(let i = 0; i < 9; i++){
        const spot = document.getElementById(String(i))
        spot.classList.remove("one", "two")
    }
})



