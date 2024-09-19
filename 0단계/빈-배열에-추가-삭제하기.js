function solution(arr, flag) {
  return arr.reduce((acc, cur, idx) => {
    if (flag[idx]) {
      acc.push(...Array.from({ length: cur * 2 }, () => cur));
    } else {
      acc.splice(acc.length - cur, acc.length);
    }

    return acc;
  }, []);
}
