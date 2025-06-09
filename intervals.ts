const removeMinIntervals = (intervals: number[][]): number => {
  const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);

  // console.log(sortedIntervals);

  let lastIncludedInterval: number[] = [0, 0];
  let restructuredIntervals: number[][] = [];
  let removedIntervalsCount: number = 0;

  for (let i = 0; i < sortedIntervals.length; i++) {
    console.log("Checking", lastIncludedInterval[0], sortedIntervals[i][1]);
    if (sortedIntervals[i][0] >= lastIncludedInterval[1]) {
      console.log("including");
      restructuredIntervals.push(sortedIntervals[i]);
      removedIntervalsCount++;
      lastIncludedInterval = sortedIntervals[i];
    }
  }

  console.log(JSON.stringify(restructuredIntervals));

  return intervals.length - restructuredIntervals.length;
};

// const intervals = [
//   [1, 3],
//   [2, 4],
//   [3, 5],
// ];

// const intervals = [
//   [1, 5],
//   [2, 6],
//   [3, 7],
//   [4, 8],
// ];

const intervals = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(JSON.stringify(removeMinIntervals(intervals)));
