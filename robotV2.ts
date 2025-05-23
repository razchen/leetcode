function uniquePathsBottomUp(cols: number, rows: number): number {
  const dp: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      if (row === rows - 1 && col === cols - 1) {
        dp[row][col] = 1;
      } else {
        const right = col + 1 < cols ? dp[row][col + 1] : 0;
        const down = row + 1 < rows ? dp[row + 1][col] : 0;
        dp[row][col] = right + down;
      }
    }
  }

  return dp[0][0];
}

function uniquePaths(cols: number, rows: number): number {
  let runs = 0;
  let memo: Record<string, number> = {};

  const move = (x: number, y: number): number => {
    if (x > cols - 1 || y > rows - 1) return 0;

    if (x === cols - 1 && y === rows - 1) {
      return 1;
    }

    const key = `${x},${y}`;
    memo[key] = move(x + 1, y) + move(x, y + 1);
    return memo[key];
  };

  return move(0, 0);
}

// console.log(uniquePaths(5, 5));
console.log(uniquePathsBottomUp(5, 5));
