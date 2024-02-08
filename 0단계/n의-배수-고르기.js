function solution(n, numlist) {
  return numlist.filter((num) => {
    return num % n === 0;
  });
}
