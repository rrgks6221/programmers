function solution(array, n) {
  return array.reduce((acc, cur) => {
    return (acc += Number(cur === n));
  }, 0);
}
