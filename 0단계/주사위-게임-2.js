function solution(a, b, c) {
  const sum = (squareNumber) => {
    return a ** squareNumber + b ** squareNumber + c ** squareNumber;
  };

  let result = sum(1);

  const duplicateCount = 3 - new Set([a, b, c]).size;

  for (let i = 1; i <= duplicateCount; i += 1) {
    result *= sum(i + 1);
  }

  return result;
}
