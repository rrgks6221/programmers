function solution(arr) {
  return Number(
    arr.every((el, eIdx) => {
      return el.every((el, iIdx) => {
        return el === arr[iIdx][eIdx];
      });
    })
  );
}
