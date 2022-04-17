function solution(orders, course) {
  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results.map((el) => el.sort().join(''));
  }

  const result = [];
  const arr = [];
  const max = [];
  const obj = {};

  orders.forEach((order) => {
    course.forEach((cnt) => {
      arr.push(getCombinations(order.split(''), cnt));
    });
  });

  for (let i = 0; i < course.length; i += 1) {
    obj[course[i]] = {};
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (obj[arr[i][j].length][arr[i][j]]) {
        obj[arr[i][j].length][arr[i][j]] += 1;
      } else {
        obj[arr[i][j].length][arr[i][j]] = 1;
      }
    }
  }

  Object.values(obj).forEach((el) => {
    max.push(Math.max(...Object.values(el)));
  });

  Object.values(obj).forEach((el, idx) => {
    for (const order in el) {
      if (el[order] >= 2 && el[order] >= max[idx]) {
        result.push(order);
      }
    }
  });

  return result.sort();
}
