export const uppercaseFirstLetter = (string: string) => {
  if (!string) return string; // Handle empty string
  return string.charAt(0).toUpperCase() + string.slice(1);
};