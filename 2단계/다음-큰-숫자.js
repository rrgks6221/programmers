function solution(n) {
  let count = 0;
  let binN = n.toString(2);
  for (let i = 0; i < binN.length; i += 1) {
    if (binN[i] === '1') count += 1;
  }

  while (1) {
    let nextCount = 0;
    n += 1;
    let binN = n.toString(2);
    for (let i = 0; i < binN.length; i += 1) {
      if (binN[i] === '1') nextCount += 1;
    }
    if (count === nextCount) return n;
  }
}
