function solution(skill, skillTrees) {
  return skillTrees.reduce((result, tree) => {
    const learned = [];
    tree = tree.split('');

    for (let i = 0; i < tree.length; i += 1) {
      const idx = skill.indexOf(tree[i]);

      if (idx === -1) continue;

      for (let j = idx - 1; j >= 0; j -= 1) {
        if (!learned.includes(skill[j])) return result;
      }

      learned.push(tree[i]);
    }

    return (result += 1);
  }, 0);
}
