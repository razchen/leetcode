function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalSurplus = 0;
  let currentTank = 0;
  let startIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    const gain = gas[i] - cost[i];
    totalSurplus += gain;
    currentTank += gain;

    if (currentTank < 0) {
      startIndex = i + 1;
      currentTank = 0;
    }
  }

  return totalSurplus >= 0 ? startIndex : -1;
}

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

// const gas = [2, 3, 4];
// const cost = [3, 4, 3];

console.log(canCompleteCircuit(gas, cost));
