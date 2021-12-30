function solution(citations) {
  const len = citations.length;
  let result = 0;

  citations.sort((a, b) => a - b);

  for (let i = 0; i < len; i += 1) {
    if (citations[i] >= len - i) {
      result = len - i;
      break;
    }
  }

  return result;
}
