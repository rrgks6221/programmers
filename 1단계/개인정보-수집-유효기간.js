function solution(today, terms, privacies) {
  const getDay = (year, month, day) => {
    return Number(day) + Number(month) * 28 + Number(year) * 12 * 28;
  };

  const currentDay = getDay(...today.split('.'));

  const term = {};

  for (let i = 0; i < terms.length; i += 1) {
    const [type, month] = terms[i].split(' ');

    term[type] = Number(month);
  }

  return privacies.reduce((acc, cur, idx) => {
    const [privacyDate, type] = cur.split(' ');
    const expireDay =
      getDay(...privacyDate.split('.')) + getDay(0, term[type], 0);

    if (expireDay < currentDay) {
      acc.push(idx + 1);
    }

    return acc;
  }, []);
}
