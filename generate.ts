function generate(rowIndex: number): number[] {
  const numRows = rowIndex + 1
  let j = 1;
  let nums = numRows == 1 ? [[1]] : [[1], [1, 1]];
  const dp = () => {
    if (j >= numRows - 1) return;

    let temp: number[] = [1];
    for (let i = 0; i < nums[j].length - 1; i++) {
      temp.push(nums[j][i] + nums[j][i + 1]);
    }
    temp.push(1);
    nums.push(temp);

    j++;

    dp();
  };

  dp();

  return nums[rowIndex];
}

console.log(JSON.stringify(generate(3)));
