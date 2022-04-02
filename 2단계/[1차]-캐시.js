function solution(cacheSize, cities) {
  const cache = [];
  let result = 0;

  cities.forEach((_, idx) => (cities[idx] = cities[idx].toLowerCase()));

  cities.forEach((city) => {
    let cacheIdx = -1;
    let LRUIdx = -1;
    let LRUMax = -Infinity;

    cache.forEach((c, idx) => {
      if (c[0] === city) cacheIdx = idx;
    });

    cache.forEach((_, idx) => (cache[idx][1] += 1));

    if (cacheIdx !== -1) {
      cache[cacheIdx][1] = 0;
      result += 1;
      return;
    }
    if (cache.length < cacheSize) {
      cache.push([city, 0]);
      result += 5;
      return;
    }

    cache.forEach((c, idx) => {
      if (LRUMax < c[1]) {
        LRUMax = c[1];
        LRUIdx = idx;
      }
    });

    if (cacheSize !== 0) cache.splice(LRUIdx, 1, [city, 0]);
    result += 5;
  });

  return result;
}
