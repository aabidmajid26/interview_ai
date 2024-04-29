export function sortTasks(tasks, sortKey) {
  const sorted = Object.values(tasks);
  sorted.sort((a, b) => a.priority - b.priority);
  return sorted;
}
