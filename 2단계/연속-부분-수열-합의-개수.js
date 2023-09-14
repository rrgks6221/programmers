function solution(elements) {
  const sums = [];
  const len = elements.length;
  elements = [...elements, ...elements];

  for (let i = 1; i <= len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      const sum = elements.slice(j, j + i).reduce((acc, cur) => {
        return acc + cur;
      }, 0);

      sums.push(sum);
    }
  }

  return new Set(sums).size;
}
