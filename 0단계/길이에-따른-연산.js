function solution(num_list) {
  if (num_list.length > 10) {
    return num_list.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }

  return num_list.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
}
