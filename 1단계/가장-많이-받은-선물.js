function solution(friends, gifts) {
  const giftMap = {};
  const giftScoreMap = {};

  for (const oName of friends) {
    giftMap[oName] = {};
    giftScoreMap[oName] = 0;

    for (const iName of friends) {
      if (oName === iName) {
        continue;
      }

      giftMap[oName][iName] = 0;
    }
  }

  for (const gift of gifts) {
    const [giver, recipient] = gift.split(' ');

    giftScoreMap[giver] += 1;
    giftScoreMap[recipient] -= 1;

    giftMap[giver][recipient] += 1;
    giftMap[recipient][giver] -= 1;
  }

  return Math.max(
    ...Object.entries(giftMap).map(([iName, data]) => {
      let giftsToReceive = 0;

      Object.entries(data).forEach(([jName, score]) => {
        if (score > 0) {
          giftsToReceive += 1;
          return;
        }
        if (score < 0) {
          return;
        }
        if (giftScoreMap[iName] > giftScoreMap[jName]) {
          giftsToReceive += 1;
        }
      });

      return giftsToReceive;
    })
  );
}
