function solution(citations) {
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i += 1) {
    if (citations[i] >= citations.length - i) {
      return citations.length - i;
    }
  }

  return 0;
}
