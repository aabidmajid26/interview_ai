export function sortTasks(tasks, sortKey) {
  const sorted = Object.values(tasks);
  try {
    sorted.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  } catch {
    sorted.sort((a, b) => a[sortKey] - b[sortKey]);
  }

  return sorted;
}
