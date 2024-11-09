// 1st code 
let oddRow = "", evenRow = "", board = "";

// logic for the 1st, 3rd, 5th and 7th row; 
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        oddRow += " ";
    } else {
        oddRow += "#"
    }
}

// logic for the 2nd, 4th, 6th, 8th
for (let j = 0; j < 8; j++) {
    if (j % 2 == 0) {
        evenRow += "#"
    } else {
        evenRow += " ";
    }
}

// add each row to the board 
for (let k = 0; k < 8; k++) {
    if ( k % 2 == 0) {
        board += oddRow;
        board += "\n";
    } else if (k == 7){
        board += evenRow;
    } else {
        board += evenRow;
        board += "\n";
    }
}

// display the chessboard
console.log(board);