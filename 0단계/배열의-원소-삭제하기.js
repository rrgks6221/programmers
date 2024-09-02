function solution(arr, delete_list) {
  return arr.filter((el) => {
    return !delete_list.includes(el);
  });
}
