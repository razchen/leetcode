function firstUniqChar(s: string): number {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    const cur = map.get(ch);

    if (cur) {
      map.set(ch, cur + 1);
    } else {
      map.set(ch, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    const cur = map.get(ch);

    if (!cur) return -1;

    if (cur < 2) {
      return i;
    }
  }

  return -1;
}

// const s = "leetcode";

// const s = "loveleetcode";
const s = "aabb";
console.log(firstUniqChar(s));
