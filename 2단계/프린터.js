function solution(priorities, location) {
  const idx = priorities.map((_, idx) => idx);
  let order = 0;
  let print = -1;

  while (print !== location) {
    if (priorities[0] === Math.max(...priorities)) {
      priorities.shift();
      print = idx.shift();
      order += 1;
    } else {
      priorities.push(priorities.shift());
      idx.push(idx.shift());
    }
  }

  return order;
}
