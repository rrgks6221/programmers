function solution(my_string, queries) {
  queries.forEach(([a, b]) => {
    const left = my_string.slice(0, a);
    const middle = my_string.slice(a, b + 1);
    const right = my_string.slice(b + 1);
    const reverseMiddle = middle.split('').reverse().join('');

    my_string = left + reverseMiddle + right;
  });

  return my_string;
}
