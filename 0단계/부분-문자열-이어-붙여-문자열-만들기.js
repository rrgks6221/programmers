function solution(my_strings, parts) {
  return parts.reduce((acc, [a, b], idx) => {
    const myString = my_strings[idx];

    return acc + myString.slice(a, b + 1);
  }, '');
}
