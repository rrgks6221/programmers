function solution(number) {
  return (
    [...number].reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0) % 9
  );
}
