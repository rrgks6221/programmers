function solution(num_list) {
  let count = 0;

  function makeOne(num) {
    if (num === 1) {
      return;
    }

    count += 1;

    if (num % 2 === 0) {
      return makeOne(num / 2);
    }
    if (num % 2 === 1) {
      return makeOne((num - 1) / 2);
    }
  }

  num_list.forEach(makeOne);

  return count;
}
