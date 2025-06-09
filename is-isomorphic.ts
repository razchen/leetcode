function isIsomorphic(s: string, t: string): boolean {
  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sMap.has(sChar)) {
      sMap.set(sChar, tChar);
    }

    if (!tMap.has(tChar)) {
      tMap.set(tChar, sChar);
    }

    if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
      return false;
    }
  }

  return true;
}

// const s = "egg";
// const t = "add";

// const s = "foo";
// const t = "bar";

// const s = "paper";
// const t = "title";

const s = "badc";
const t = "baba";

console.log(isIsomorphic(s, t));
