function solution(n, lost, reserve) {
  let result = n - lost.length;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let el of [...lost]) {
    if (reserve.includes(el)) {
      result += 1;
      lost.splice(lost.indexOf(el), 1);
      reserve.splice(reserve.indexOf(el), 1);
    }
  }

  for (let el of lost) {
    if (reserve.includes(el - 1)) {
      result += 1;
      reserve.splice(reserve.indexOf(el - 1), 1);
      continue;
    }

    if (reserve.includes(el + 1)) {
      result += 1;
      reserve.splice(reserve.indexOf(el + 1), 1);
    }
  }

  return result;
}
