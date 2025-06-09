function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

// const nums = [1, 3, 4, 2, 2];
// const nums = [3, 1, 3, 4, 2];
const nums = [3, 3, 3, 3, 3];
console.log(findDuplicate(nums));
