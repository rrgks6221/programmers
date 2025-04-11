function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, b + 1);
  }

  if (n === 2) {
    return num_list.slice(a, num_list.length);
  }

  if (n === 3) {
    return num_list.slice(a, b + 1);
  }

  return num_list.slice(a, b + 1).filter((_el, idx) => {
    return idx % c === 0;
  });
}
