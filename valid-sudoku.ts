function isValidSudoku(board: string[][]): boolean {
  const colMap = new Map<number, number[]>();
  const rectMap = new Map<string, number[]>();

  let currentRow: number[] = [];

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === ".") {
        continue;
      }

      const num = parseInt(board[row][col]);

      if (!currentRow.includes(num)) {
        currentRow.push(num);
      } else {
        return false;
      }

      let arrForCol = colMap.get(col);
      if (!arrForCol) {
        arrForCol = [];
      }
      if (arrForCol.includes(num)) return false;
      arrForCol.push(num);
      colMap.set(col, arrForCol);

      const rectKey = `${Math.floor(row / 3)} - ${Math.floor(col / 3)}`;
      let arrForRect = rectMap.get(rectKey);
      if (!arrForRect) {
        arrForRect = [];
      }
      if (arrForRect.includes(num)) return false;
      arrForRect.push(num);
      rectMap.set(rectKey, arrForRect);
    }

    currentRow = [];
  }

  return true;
}

const board = [
  ["7", ".", ".", ".", "4", ".", ".", ".", "."],
  [".", ".", ".", "8", "6", "5", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "9", ".", ".", "."],
  [".", ".", ".", ".", "5", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// const board = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "3"],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

console.log(isValidSudoku(board));
