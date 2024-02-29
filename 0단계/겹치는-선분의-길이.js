function solution(lines) {
  const flatLines = [...lines.flat()];
  const min = Math.min(...flatLines);
  const max = Math.max(...flatLines);
  const obj = {};

  for (let i = min; i < max; i += 1) {
    obj[JSON.stringify([i, i + 1])] = 0;
  }

  lines.forEach((line) => {
    for (let i = line[0]; i < line[1]; i += 1) {
      obj[JSON.stringify([i, i + 1])] += 1;
    }
  });

  return Object.values(obj).reduce((acc, cur) => {
    return acc + Number(cur >= 2);
  }, 0);
}
