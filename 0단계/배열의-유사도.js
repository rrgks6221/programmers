function solution(s1, s2) {
  const mergedStrings = [...s1, ...s2];

  return mergedStrings.length - new Set(mergedStrings).size;
}
