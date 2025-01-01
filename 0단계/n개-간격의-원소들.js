function solution(num_list, n) {
  return num_list.filter((_num, idx) => {
    return idx % n === 0;
  });
}
