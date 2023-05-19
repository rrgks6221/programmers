function solution(k, d) {
  const xArr = [];
  let count = 0;

  for (let i = 0; i <= d; i += k) {
    xArr.push(i);
  }

  let y = 0;

  while (xArr.length) {
    if (Math.sqrt(xArr.at(-1) ** 2 + y ** 2) > d) {
      xArr.pop();
    } else {
      y += k;
      count += xArr.length;
    }
  }

  return count;
}
