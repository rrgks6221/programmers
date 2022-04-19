function solution(dirs) {
  const result = [];
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const idx = [5, 5];

  for (let i = 0; i < dirs.length; i += 1) {
    if (idx[1] === 10 && dirs[i] === 'U') continue;
    if (idx[1] === 0 && dirs[i] === 'D') continue;
    if (idx[0] === 10 && dirs[i] === 'R') continue;
    if (idx[0] === 0 && dirs[i] === 'L') continue;

    const start = String(idx[0]) + String(idx[1]);

    idx[0] += move[dirs[i]][0];
    idx[1] += move[dirs[i]][1];

    const end = String(idx[0]) + String(idx[1]);

    result.push(start + end);
    result.push(end + start);
  }

  return new Set(result).size / 2;
}
