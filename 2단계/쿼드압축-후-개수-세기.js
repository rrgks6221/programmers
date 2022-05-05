function solution(arr) {
  function compression(area) {
    const value = area[0][0];
    const same = area.flat().every((el) => el === value);

    if (same) {
      result[value] += 1;
      return;
    }

    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const n = area.length;

    for (let i = 0; i < n / 2; i += 1) {
      arr1.push(area[i].splice(0, n / 2));
      arr2.push(area[i].splice(0, n / 2));
    }
    for (let i = n / 2; i < n; i += 1) {
      arr3.push(area[i].splice(0, n / 2));
      arr4.push(area[i].splice(0, n / 2));
    }

    compression(arr1);
    compression(arr2);
    compression(arr3);
    compression(arr4);
  }

  const result = [0, 0];

  compression(arr);

  return result;
}
