function solution(rows, columns, queries) {
  const result = [];
  const arr = [];

  for (let i = 0; i < rows; i += 1) {
    arr.push([]);

    for (let j = 0; j < columns; j += 1) {
      arr[i].push(j + 1 + i * columns);
    }
  }

  for (let i = 0; i < queries.length; i += 1) {
    const x1 = queries[i][0];
    const y1 = queries[i][1];
    const x2 = queries[i][2];
    const y2 = queries[i][3];
    let cur = arr[queries[i][0] - 1][queries[i][1] - 1];
    let min = cur;

    for (let j = y1; j < y2; j += 1) {
      [arr[x1 - 1][j], cur] = [cur, arr[x1 - 1][j]];
      min = Math.min(cur, min);
    }

    for (let j = x1; j < x2; j += 1) {
      [arr[j][y2 - 1], cur] = [cur, arr[j][y2 - 1]];
      min = Math.min(cur, min);
    }

    for (let j = y2 - 2; j >= y1 - 1; j -= 1) {
      [arr[x2 - 1][j], cur] = [cur, arr[x2 - 1][j]];
      min = Math.min(cur, min);
    }

    for (let j = x2 - 2; j >= x1 - 1; j -= 1) {
      [arr[j][y1 - 1], cur] = [cur, arr[j][y1 - 1]];
      min = Math.min(cur, min);
    }

    result.push(min);
  }

  return result;
}
