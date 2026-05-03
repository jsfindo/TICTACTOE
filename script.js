const GameBoard = []
 



function createPlayer1(name1){

    return { name:name1, positions:[]}
}

function createPlayer2(name2){

    return { name:name2, positions:[]}
}

const player1 = createPlayer1(prompt("enter player 1 name:"))
const player2 = createPlayer2(prompt("enter player 2 name:"))

 const player = 1

 function changePlayer(){
    if (playerlayer === 1) {
    player = 2;
} else {
    player = 1;
}
 }

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
]

const winner = ""

function checkForWinner(){
    for(const pattern of winPatterns ){
        const isMatch1 = player1.join(',').includes(pattern.join(','));
        const isMatch2 = player2.join(',').includes(pattern.join(','));

        if(isMatch1 == true){
            winner = player1
        } else if(isMatch2 == true){
            winner = player2
        }
    }  
}

function  click(square){
    if(GameBoard[square-1] === undefined && player == 1){

        GameBoard[square-1] = player
        player1[square-1] = square -1
        changePlayer()
        checkForWinner()

    } else if((GameBoard[square-1] === undefined && player == 2)){
        GameBoard[square-1] = player
        player2[square-1] = square -1
        changePlayer()
        checkForWinner()
    }

}

if(winner != ""){
    
}
