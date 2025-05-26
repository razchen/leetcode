function removeDuplicates(nums: any[]): number {
  let i: number = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  console.log(nums);
  return i;
}

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
