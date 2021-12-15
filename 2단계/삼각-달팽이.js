function solution(n) {
  const result = [];
  const direction = ['down', 'right', 'up'];
  const idx = [0, 0];
  let directionCnt = 0;
  let input = 1;

  for (let i = 1; i <= n; i += 1) {
    result.push(Array(i).fill(0));
  }

  for (let i = n; i > 0; i -= 1) {
    const temp = input;

    if (direction[directionCnt % 3] === 'down') {
      for (let j = input; j < temp + i; j += 1) {
        result[idx[0]][idx[1]] = j;
        input += 1;
        idx[0] += 1;
      }
      idx[0] -= 1;
      idx[1] += 1;
    }

    if (direction[directionCnt % 3] === 'right') {
      for (let j = input; j < temp + i; j += 1) {
        result[idx[0]][idx[1]] = j;
        input += 1;
        idx[1] += 1;
      }
      idx[0] -= 1;
      idx[1] -= 2;
    }

    if (direction[directionCnt % 3] === 'up') {
      for (let j = input; j < temp + i; j += 1) {
        result[idx[0]][idx[1]] = j;
        input += 1;
        idx[0] -= 1;
        idx[1] -= 1;
      }
      idx[0] += 2;
      idx[1] += 1;
    }

    directionCnt += 1;
  }

  return result.flat();
}
