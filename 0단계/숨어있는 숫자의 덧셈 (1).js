function solution(my_string) {
  return [...my_string.replace(/[A-z]/g, '')].reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
}
