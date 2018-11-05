let board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null],
  ["S", null, null, null, null],
  [null, "S", null, null, null],
  [null, null, null, null, "S"]
];

for (let i = 0; i < 10; i++) {
  let row = getRandomNumber();
  let columm = getRandomNumber();
  console.log("Row: " + row + " " + "Columm: " + columm);
  if (board[row][columm] === "S") {
    console.log("Hit on: " + row + "," + columm);
    board[row][columm] = null;
  }

};

function getRandomNumber() {
  return Math.floor(Math.random() * ((4 - 0) + 1) );
};

console.log(board);