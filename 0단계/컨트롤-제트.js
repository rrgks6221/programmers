function solution(s) {
  return s.split(' ').reduce((acc, cur, idx, array) => {
    if (cur !== 'Z' && array[idx + 1] !== 'Z') {
      return (acc += Number(cur));
    }
    return acc;
  }, 0);
}
