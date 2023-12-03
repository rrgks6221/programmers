function solution(X, Y) {
  const pairs = [];
  const xObj = {};
  const yObj = {};

  for (let i = 0; i < 10; i += 1) {
    xObj[i] = 0;
    yObj[i] = 0;
  }

  for (let i = 0; i < X.length; i += 1) {
    xObj[X[i]] += 1;
  }

  for (let i = 0; i < Y.length; i += 1) {
    yObj[Y[i]] += 1;
  }

  for (let i = 0; i < 10; i += 1) {
    const x = xObj[i];
    const y = yObj[i];

    const min = Math.min(x, y);

    if (min !== 0) {
      pairs.push(String(i).repeat(min));
    }
  }

  if (pairs.length === 0) {
    return '-1';
  }

  const result = String(pairs.reverse().join(''));

  if (result.startsWith('0')) {
    return '0';
  }

  return result;
}
