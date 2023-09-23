function solution(n) {
  const PIZZA_PIECE = 6;
  let pizzaCount = 1;

  while ((PIZZA_PIECE * pizzaCount) % n !== 0) {
    pizzaCount += 1;
  }

  return pizzaCount;
}
