function findContentChildren(g: number[], s: number[]): number {
  let childIndex = 0;
  let cookieIndex = 0;

  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);

  while (g.length > childIndex && s.length > cookieIndex) {
    // console.log(childIndex);
    if (g[childIndex] <= s[cookieIndex]) {
      childIndex++;
    }
    cookieIndex++;
  }

  return childIndex;
}

// const g = [1, 2, 3];
// const s = [1, 1];

// const g = [1, 2];
// const s = [1, 2, 3];

const g = [10, 9, 8, 7];
const s = [5, 6, 7, 8];

console.log(findContentChildren(g, s));
