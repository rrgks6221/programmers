function solution(hp) {
  let totalAntCount = 0;

  const attack = (damage) => {
    const antCount = parseInt(hp / damage, 10);
    totalAntCount += antCount;
    hp -= antCount * damage;
  };

  attack(5);
  attack(3);
  attack(1);

  return totalAntCount;
}
