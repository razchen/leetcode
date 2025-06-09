function removeDuplicateLetters(s: string): string {
  const seen = new Set<string>();
  let stack: string[] = [];

  for (let ch of s) {
    if (!seen.has(ch)) {
      seen.add(ch);
      stack += ch;
    }
  }

  return stack;
}

// const s = "bcabc";
const s = "cbacdcbc";

console.log(removeDuplicateLetters(s));
