const isFileSizeValid = (file, maxMb = 5) => {
  if (!file) return false;
  const maxSize = maxMb * 1024 * 1024;
  if (file.size > maxSize) return false;
  return true;
};

export { isFileSizeValid };
