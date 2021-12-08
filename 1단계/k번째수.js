function solution(array, commands) {
  const result = [];

  for (const command of commands) {
    const myArr = [...array];

    result.push(
      myArr.slice([command[0] - 1], command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
    );
  }

  return result;
}
