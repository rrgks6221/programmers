function solution(n, control) {
  const obj = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };
  let result = n;

  for (let i = 0; i < control.length; i += 1) {
    result += obj[control[i]];
  }

  return result;
}
