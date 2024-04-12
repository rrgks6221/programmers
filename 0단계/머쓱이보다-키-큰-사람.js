function solution(array, height) {
  return array.reduce((acc, cur) => {
    return (acc += Number(cur > height));
  }, 0);
}
