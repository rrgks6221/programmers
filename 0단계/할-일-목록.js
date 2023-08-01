function solution(todo_list, finished) {
  return todo_list.filter((_todo, idx) => {
    return !finished[idx];
  });
}
