function solution(num_list) {
  return num_list.findIndex((num) => {
    return num < 0;
  });
}
