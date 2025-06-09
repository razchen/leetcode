function longestPalindrome(s: string): number {
  const arr: Record<string, number> = {};
  let totalCount: number = 0;
  let foundOneLetter: boolean = false;
  for (let letter of s) {
    if (arr[letter]) {
      arr[letter] += 1;
    } else {
      arr[letter] = 1;
    }
  }

  for (let i = 0; i < Object.keys(arr).length; i++) {
    const letter = Object.keys(arr)[i];
    const letterCount = arr[letter];

    if (letterCount % 2 === 0) {
      totalCount += letterCount;
    } else if (letterCount > 1) {
      totalCount += letterCount - 1
      foundOneLetter = true;
    } else {
      foundOneLetter = true;
    }
  }

  return totalCount + (foundOneLetter ? 1 : 0);
}

// const s = "abccccdd";
// const s = 'a';
const s = 'ccc';
console.log(longestPalindrome(s));
