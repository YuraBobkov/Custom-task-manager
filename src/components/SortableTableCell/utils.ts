export const chooseDirection = (
  direction: 'asc' | 'des' | null,
): 'asc' | 'des' | null => {
  if (direction === 'asc') {
    return 'des';
  }
  if (direction === 'des') {
    return null;
  }
  return 'asc';
};
