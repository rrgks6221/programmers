function solution(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let arrLength = 2;

  while (arrLength < arr.length) {
    if (arr.length === 1) {
      break;
    }

    arrLength *= 2;
  }

  const myArr = new Array(arrLength).fill(0);
  myArr.splice(0, arr.length, ...arr);

  return myArr;
}
