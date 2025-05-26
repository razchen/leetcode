function canJump(nums: number[]): boolean {
  let goal = nums.length - 1;

  for (let i = nums.length - 1 - 1; i >= 0; i--) {

    if (nums[i] + i >= goal) {
      goal = i;
    }

  }

  return goal === 0;
}

// const nums = [2, 3, 1, 1, 4];
const nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
