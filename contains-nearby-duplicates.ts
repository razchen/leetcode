function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen = new Set();
  if (k === 0) return false;

  for (let i = 0; i < k; i++) {
    if (nums[i] === undefined) break;
    if (seen.has(nums[i])) return true;

    console.log(nums[i]);
    seen.add(nums[i]);
  }

  for (let i = k; i <= nums.length; i++) {
    if (nums[i] === undefined) break;
    if (seen.has(nums[i])) return true;

    seen.delete(nums[i - k]);
    seen.add(nums[i]);
  }

  return false;
}

// const nums = [1, 2, 3, 1];
// const k = 3;

// const nums = [1, 0, 1, 1];
// const k = 1;

// const nums = [1, 2, 3, 1, 2, 3];
// const k = 2;

// const nums = [1, 2, 1];
// const k = 1;

// const nums = [0, 1, 2, 3, 2, 5];
// const k = 3;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
const k = 3;
console.log(containsNearbyDuplicate(nums, k));

// 1 2 3 1

// - -
// -   -
// -     -
//   -   -
//     - -
