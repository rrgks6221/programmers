function solution(names) {
  return names.filter((_name, idx) => {
    return idx % 5 === 0;
  });
}
