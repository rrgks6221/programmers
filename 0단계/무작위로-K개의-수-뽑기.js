function solution(arr, k) {
  const myArr = new Array(k).fill(-1);
  myArr.unshift(...new Set(arr));

  return myArr.slice(0, k);
}
