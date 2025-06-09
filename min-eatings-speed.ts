function canEatAllBananas(piles: number[], k: number, h: number) {
  let hours = 0;
  for (let pile of piles) {
    hours += Math.ceil(pile / k);
  }

  return h >= hours;
}

function minEatingSpeed(piles: number[], h: number): number {
  let low = 1;
  let high = Math.max(...piles);
  let result = high;

  console.log(high);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log(mid, low, high);

    if (canEatAllBananas(piles, mid, h)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

const piles = [3, 6, 7, 11];
const h = 8;

// const piles = [30, 11, 23, 4, 20];
// const h = 5;

// const piles = [30,11,23,4,20];
// const h = 6

console.log(minEatingSpeed(piles, h));
