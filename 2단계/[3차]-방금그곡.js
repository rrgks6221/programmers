function solution(m, musicInfo) {
  musicInfo = musicInfo
    .map((info) => info.split(','))
    .map((info) => {
      const start = info[0].split(':').map((v) => +v);
      const end = info[1].split(':').map((v) => +v);
      const playTime = end[0] * 60 + end[1] - start[0] * 60 - start[1];
      let music = '';
      info[3] = info[3]
        .replace(/A#/g, 'H')
        .replace(/C#/g, 'I')
        .replace(/D#/g, 'J')
        .replace(/F#/g, 'K')
        .replace(/G#/g, 'L');

      for (let i = 0; i < playTime; i += 1) {
        music += info[3][i % info[3].length];
      }

      return [info[2], music];
    });

  m = m
    .replace(/A#/g, 'H')
    .replace(/C#/g, 'I')
    .replace(/D#/g, 'J')
    .replace(/F#/g, 'K')
    .replace(/G#/g, 'L');

  const result = musicInfo.filter((music) => music[1].includes(m));

  if (result.length === 0) return '(None)';
  if (result.length === 1) return result[0][0];

  const maxTime = result.reduce((max, cur) => {
    Math.max(max, cur[1].length);
  }, -Infinity);

  return result.filter((music) => music[1].length === maxTime)[0][0];
}
