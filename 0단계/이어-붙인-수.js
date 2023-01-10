function solution(num_list) {
  const oddNumberList = num_list.filter((num) => {
    return num % 2 === 1;
  });
  const evenNumberList = num_list.filter((num) => {
    return num % 2 === 0;
  });

  const connectOdd = oddNumberList.reduce((acc, cur) => {
    return acc + String(cur);
  }, '');
  const connectEven = evenNumberList.reduce((acc, cur) => {
    return acc + String(cur);
  }, '');

  return Number(connectOdd) + Number(connectEven);
}
