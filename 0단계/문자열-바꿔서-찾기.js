function solution(myString, pat) {
  return Number(
    myString.replace(/(A|B)/g, (str) => (str === 'A' ? 'B' : 'A')).includes(pat)
  );
}
