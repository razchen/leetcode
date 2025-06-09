function maximumUnits(boxTypes: number[][], truckSize: number): number {
  const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);

  let currentTruckSize = truckSize;
  let totalUnits = 0;

  for (let i = 0; i < sortedBoxTypes.length; i++) {
    const currentBox = sortedBoxTypes[i];
    const currentBoxCount = currentBox[0];
    const currentBoxUnits = currentBox[1];
    const boxesTook =
      currentTruckSize - currentBoxCount >= 0
        ? currentBoxCount
        : currentTruckSize;

    currentTruckSize -= boxesTook;

    totalUnits += boxesTook * currentBoxUnits;
  }

  return totalUnits;
}

// const boxTypes = [
//   [1, 3],
//   [2, 2],
//   [3, 1],
// ];
// const truckSize = 4;

const boxTypes = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9],
];
const truckSize = 10;

console.log(maximumUnits(boxTypes, truckSize));
