function solution(my_string, is_prefix) {
  const prefixs = [];

  for (let i = 0; i < my_string.length; i += 1) {
    prefixs.push(my_string.slice(0, i));
  }

  return Number(
    prefixs.some((prefix) => {
      return prefix === is_prefix;
    })
  );
}
