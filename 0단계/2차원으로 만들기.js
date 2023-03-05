function solution(num_list, n) {
  return Array.from({ length: Math.ceil(num_list.length / n) }).map(
    (_, idx) => {
      return num_list.splice(0, n);
    }
  );
}
