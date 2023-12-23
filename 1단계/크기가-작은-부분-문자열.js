function solution(t, p) {
  const len = p.length;
  const strs = [];

  for (let i = 0; i <= t.length - len; i += 1) {
    strs.push(t.slice(i, i + len));
  }

  return strs.filter((str) => {
    return Number(p) >= Number(str);
  }).length;
}
