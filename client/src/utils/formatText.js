export const shortenFilename = (filename, maxLength = 10) => {
  const extIndex = filename.lastIndexOf("."); // Find the last dot (.)

  if (extIndex === -1) return filename; // No extension, return as is

  const namePart = filename.substring(0, extIndex); // Extract filename without extension
  const extension = filename.substring(extIndex); // Extract extension (e.g., .png)

  if (namePart.length <= maxLength) {
    return filename; // If filename is already short, return it as is
  }

  const visiblePart = namePart.substring(0, 8); // First 4 letters
  const hiddenPart = ".".repeat(2); // Replace middle with "x"

  return `${visiblePart}${hiddenPart}${extension}`;
};
