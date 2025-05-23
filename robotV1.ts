function uniquePaths(m: number, n: number): number {
  let runs = 0;
  let memo: Record<string, number> = {};

  const move = (dir: string, currentPosition: number[]): number => {
    // runs++;
    // if (runs > 100) {
    //   return 88888;
    // }

    // Starting
    if (!dir) {
      return (
        move("right", [...currentPosition]) + move("down", [...currentPosition])
      );
    }

    // Reached end
    if (currentPosition[0] === n - 1 && currentPosition[1] === m - 1) {
      console.log("---------------");
      return 1;
    }

    console.log("from pos", currentPosition);

    if (dir === "right") {
      currentPosition = [currentPosition[0] + 1, currentPosition[1]];
    } else {
      currentPosition = [currentPosition[0], currentPosition[1] + 1];
    }

    const key = currentPosition.join(",");

    if (memo[key] !== undefined) return memo[key];

    console.log("to pos", currentPosition);

    // return 123;
    if (currentPosition[0] === n - 1) {
      // Reached right wall

      memo[key] = move("down", [...currentPosition]);
      return memo[key];
    }

    if (currentPosition[1] === m - 1) {
      // Reached bottom wall

      memo[key] = move("right", [...currentPosition]);
      return memo[key];
    }

    memo[key] =
      move("right", [...currentPosition]) + move("down", [...currentPosition]);
    return memo[key];
  };

  const result = move("", [0, 0]);

  return result;
}

console.log(uniquePaths(5, 5));
