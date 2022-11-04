window.addEventListener('DOMContentLoaded',() =>{
const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announce');

let board = ['','','','','','','','',''];
let currentPlayer='X';
let isGameActive= true;

const PLAYER_WON='PLAYER_WON';
const PLAYER_LOSS ='PLAYER_LOSE';
const TIE ='TIE'

/*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const updateBoard = (index) => {
            board[index] = currentPlayer;
        }
        const changePlayer =() =>{
            playerDisplay.classList.remove('player${currentPlayer}');
            currentPlayer = currentPlayer==='X'?'0':'X';
            playerDisplay.innerText = currentPlayer
            playerDisplay.classList.add('player${currentPlayer}');
        }

        const isValidAction = (tiles) =>{
            if(tiles.innerText === 'X' || tiles.innerText === 'O'){
                return false;
            }
            return true;
        }

        const userAction=(tile,index)=>{
            if(isGameActive && isValidAction(tile)){
                tile.innerText = currentPlayer;
                tile.classList.add('player${currentPlayer}');
                updateBoard(index);
                changePlayer();
            }
        }

        tiles.forEach((tile,index) =>{
            tile.addEventListener('click',()=>{
                userAction(tile,index);
            })
        })
})

