function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let currentFlowers = n;
  let lastFlower = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const flower = flowerbed[i];
    const nextFlower = i + 1 < flowerbed.length ? flowerbed[i + 1] : 0;
    if (flower === 0 && lastFlower === 0 && nextFlower === 0) {
      currentFlowers--;
      lastFlower = 1;
    } else {
      lastFlower = flower;
    }

    if (currentFlowers === 0) return true;
  }

  return currentFlowers <= 0;
}

// const flowerbed = [1, 0, 0, 0, 1];
// const n = 1;

// const flowerbed = [1, 0, 0, 0, 1];
// const n = 2;

// const flowerbed = [1, 0, 0, 0, 0, 1];
// const n = 2;

const flowerbed = [0, 0, 1, 0, 1];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n));
