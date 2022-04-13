function solution(places) {
  const arr = [];
  const result = [];

  for (let i = 0; i < 7; i += 1) {
    arr.push([]);
    for (let j = 0; j < 7; j += 1) {
      arr[i].push([]);
      for (let k = 0; k < 7; k += 1) {
        arr[i][j].push(0);
      }
    }
  }

  for (let i = 1; i < 6; i += 1) {
    for (let j = 1; j < 6; j += 1) {
      for (let k = 1; k < 6; k += 1) {
        if (places[i - 1][j - 1][k - 1] === 'P') {
          arr[i][j][k] -= 1;
          arr[i][j - 1][k] -= 1;
          arr[i][j][k - 1] -= 1;
          arr[i][j + 1][k] -= 1;
          arr[i][j][k + 1] -= 1;
        }
        if (places[i - 1][j - 1][k - 1] === 'X') arr[i][j][k] += 3;
      }
    }
    result.push(Number(!arr[i].flat().some((el) => el < -1)));
  }
  return result;
}
