function rob(nums: number[]): number {
  const memo: number[] = [];

  const dp = (i: number): number => {
    if (i < 0) return 0;

    if (memo[i] != undefined) {
      return memo[i];
    }

    memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);

    return memo[i];
  };

  return dp(nums.length - 1);
}

console.log(
  rob([
    1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1,
    2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2,
    3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1,
  ])
);
