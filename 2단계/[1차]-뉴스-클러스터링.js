function solution(str1, str2) {
  function getSet(str) {
    const arr = [];

    for (let i = 0; i < str.length - 1; i += 1) {
      arr.push(str.slice(i, i + 2).toLowerCase());
    }

    return arr.filter((str) => !/[^a-z]/gi.test(str));
  }

  const arr1 = getSet(str1);
  const arr2 = getSet(str2);
  let union = arr1.length + arr2.length;
  let intersection = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    const idx = arr2.indexOf(arr1[i]);

    if (idx !== -1) {
      arr2.splice(idx, 1);
      union -= 1;
      intersection += 1;
    }
  }

  if (intersection + union === 0) return 65536;
  return Math.floor((intersection / union) * 65536);
}
