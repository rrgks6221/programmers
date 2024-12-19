function solution(n, k) {
  const LAMB_SKEWERS_PRICE = 12000;
  const DRINK_PRICE = 2000;

  const getServiceDrinkCount = (lambSkewersCount) => {
    const SERVICE_STANDARD_COUNT = 10;

    return parseInt(lambSkewersCount / SERVICE_STANDARD_COUNT, 10);
  };

  return n * LAMB_SKEWERS_PRICE + (k - getServiceDrinkCount(n)) * DRINK_PRICE;
}
