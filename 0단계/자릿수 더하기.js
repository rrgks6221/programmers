function solution(n) {
  return [...String(n)].reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
}
