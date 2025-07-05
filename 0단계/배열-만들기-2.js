function solution(l, r) {
  const arr = [];

  l = Math.floor(l / 5) * 5;
  r = Math.floor(r / 5) * 5;

  for (let i = l; i <= r; i += 5) {
    arr.push(i);
  }

  const result = arr.filter((el) => {
    return !String(el).replace(/(0|5)/g, '').length;
  });

  return result.length ? result : [-1];
}
