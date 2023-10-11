function solution(s) {
  const obj = {};

  for (let i = 0; i < s.length; i += 1) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }

  return Object.keys(obj)
    .filter((key) => {
      return obj[key] === 1;
    })
    .sort()
    .join('');
}
