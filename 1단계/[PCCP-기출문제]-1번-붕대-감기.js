function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const maxRound = attacks[attacks.length - 1][0];
  let currentHealthPoint = health;
  let continueCount = 0;

  for (let i = 1; i <= maxRound; i += 1) {
    const currentAttack = attacks.find((attack) => attack[0] === i);

    if (currentAttack) {
      const [attackTime, attackDamage] = currentAttack;

      currentHealthPoint -= attackDamage;

      if (currentHealthPoint <= 0) {
        return -1;
      }

      continueCount = 0;

      continue;
    }

    continueCount += 1;

    currentHealthPoint = Math.min(currentHealthPoint + x, health);

    if (continueCount === t) {
      currentHealthPoint = Math.min(currentHealthPoint + y, health);
      continueCount = 0;
    }
  }

  return currentHealthPoint;
}
드;
