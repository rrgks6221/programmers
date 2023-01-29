function solution(my_string, is_suffix) {
  const suffixs = [];

  for (let i = 0; i < my_string.length; i += 1) {
    suffixs.push(my_string.slice(i));
  }

  return Number(
    suffixs.some((suffix) => {
      return suffix === is_suffix;
    })
  );
}
