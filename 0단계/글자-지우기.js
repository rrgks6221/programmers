function solution(my_string, indices) {
  const myString = my_string.split('');

  indices.forEach((el) => {
    myString[el] = '';
  });

  return myString
    .filter((el) => {
      return el;
    })
    .join('');
}
