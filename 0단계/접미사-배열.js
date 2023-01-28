function solution(my_string) {
  const arr = [];

  for (let i = 0; i < my_string.length; i += 1) {
    arr.push(my_string.slice(i));
  }

  return arr.sort();
}
