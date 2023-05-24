function solution(my_string) {
  return my_string.split(/[A-z]/).reduce((acc, cur) => {
    acc = Number(acc);
    cur = Number(cur);

    if (!cur) {
      return acc;
    }
    return acc + cur;
  }, 0);
}
