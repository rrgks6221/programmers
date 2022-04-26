function solution(n, a, b) {
  function getSection(start, end) {
    const middle = (start + end + 1) / 2;

    if (start === end - 1) return { start, end };
    if (a >= middle && b >= middle) return getSection(middle, end);
    if (a < middle && b < middle) return getSection(start, middle - 1);
    return { start, end };
  }

  const { start, end } = getSection(1, n);

  return Math.log2(end - start + 1);
}
