function climbStairs(n: number): number {
  const memo: number[] = [];

  const dfs = (i: number): number => {
    if (i === n) {
      return 1;
    }

    if (i > n) {
      return 0;
    }

    if (memo[i]) {
      return memo[i];
    } else {
      memo[i] = dfs(i + 1) + dfs(i + 2);
    }

    return memo[i];
  };

  return dfs(0);
}

function climbStairsBottomUp(n: number): number {
  const bottomUp: number[] = [];

  const dfs = (i: number): number => {
    if (i === n) {
      console.log("here");
      return 1;
    }

    if (i > n) {
      return 0;
    }

    if (bottomUp[i]) {
      console.log("here");
      return bottomUp[i];
    } else {
      bottomUp[0] = 1;
      bottomUp[1] = 1;
      for (let i = 2; i < n + 1; i++) {
        bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
      }

      console.log(bottomUp);
      return bottomUp[n];
    }
  };

  return dfs(0);
}

console.log(climbStairs(6));
// console.log(climbStairsBottomUp(6));
