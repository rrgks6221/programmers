function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => {
    return acc + my_string[cur];
  }, '');
}
