function findMin(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;

  if (nums.length === 1) return nums[0];

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] < nums[high]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return nums[low];
}

// const nums = [1, 2, 3, 4, 5];

const nums = [3, 4, 5, 1, 2];

// const nums = [
//   266, 267, 268, 269, 271, 278, 282, 292, 293, 298, 6, 9, 15, 19, 21, 26, 33,
//   35, 37, 38, 39, 46, 49, 54, 65, 71, 74, 77, 79, 82, 83, 88, 92, 93, 94, 97,
//   104, 108, 114, 115, 117, 122, 123, 127, 128, 129, 134, 137, 141, 142, 144,
//   147, 150, 154, 160, 163, 166, 169, 172, 173, 177, 180, 183, 184, 188, 198,
//   203, 208, 210, 214, 218, 220, 223, 224, 233, 236, 241, 243, 253, 256, 257,
//   262, 263,
// ];

console.log(findMin(nums));
