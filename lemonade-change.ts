function lemonadeChange(bills: number[]): boolean {
  const myChange: Record<number, number> = {
    20: 0,
    10: 0,
    5: 0,
  };

  for (let bill of bills) {
    let currentChange = bill - 5;

    console.log("bill, currentChange", bill, currentChange);

    myChange[bill] += 1;

    if (currentChange === 15) {
      if (myChange[10]) {
        myChange[10]--;
        myChange[5]--;
      } else {
        myChange[5] = myChange[5] - 3;
      }
    } else if (currentChange === 10) {
      if (myChange[10]) {
        myChange[10]--;
      } else {
        myChange[5] = myChange[5] - 2;
      }
    } else if (currentChange === 5) {
      myChange[5]--;
    }

    console.log("myChange", myChange);

    console.log("-------------------");

    if (myChange[10] < 0 || myChange[5] < 0) {
      return false;
    }
  }

  return true;
}

const bills = [5, 5, 5, 10, 20];
// const bills = [5, 5, 10, 10, 20];

console.log(lemonadeChange(bills));
