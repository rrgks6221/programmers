function solution(n, arr1, arr2) {
  return arr1
    .map((el, idx) => {
      return (el | arr2[idx]).toString(2).padStart(n, '0');
    })
    .map((el) => {
      return el.replace(/(0|1)/g, (str) => {
        return str === '1' ? '#' : ' ';
      });
    });
  const convertBinary = (el) => {
    return el.toString(2).padStart(n, '0');
  };
  const binaryMap1 = arr1.map(convertBinary);
  const binaryMap2 = arr2.map(convertBinary);
  return Array.from({ length: n }).map((_, idx) => {
    let str = '';

    for (let i = 0; i < n; i += 1) {
      str +=
        Number(binaryMap1[idx][i]) + Number(binaryMap2[idx][i]) ? '#' : ' ';
    }

    return str;
  });
}
