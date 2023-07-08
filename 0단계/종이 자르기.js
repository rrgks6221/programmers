function solution(dots) {
  const xx = dots.map((dot) => dot[0]);
  const yy = dots.map((dot) => dot[1]);
  const width = Math.abs(Math.max(...xx) - Math.min(...xx));
  const height = Math.abs(Math.max(...yy) - Math.min(...yy));

  return width * height;
}
