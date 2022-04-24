function solution(n, words) {
  function getResult(turn) {
    return [(turn % n) + 1, Math.ceil((turn + 1) / n)];
  }

  for (let i = 1; i < words.length; i += 1) {
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return getResult(i);
    }

    for (let j = 0; j < i; j += 1) {
      if (words[i] === words[j]) return getResult(i);
    }
  }

  return [0, 0];
}
