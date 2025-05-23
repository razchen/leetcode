function minPathSum(grid: number[][]): number {
  const memo: Record<string, number> = {};

  const dp = (x: number, y: number): number => {
    if (x > grid[0].length - 1) return Infinity;
    if (y > grid.length - 1) return Infinity;

    if (x === grid[0].length - 1 && y === grid.length - 1) {
      return grid[y][x];
    }

    const key = `${x},${y}`;
    if (memo[key] !== undefined) {
      return memo[key];
    }

    memo[key] = grid[y][x] + Math.min(dp(x + 1, y), dp(x, y + 1));
    return memo[key];
  };

  return dp(0, 0);
}

function minPathSumBottomUp(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      if (row === rows - 1 && col === cols - 1) {
        dp[row][col] = grid[row][col];
        continue;
      }

      dp[row][col] =
        grid[row][col] +
        Math.min(
          dp[row + 1]?.[col] ?? Infinity,
          dp[row]?.[col + 1] ?? Infinity
        );
    }
  }

  return dp[0][0];
}

const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(minPathSumBottomUp(grid));
// console.log(minPathSum(grid));
