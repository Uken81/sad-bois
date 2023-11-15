/**
 * A utility function that capitalises the first letter of every word in a sentence.
 * @param {string} str - The string to be capitalised and returned.
 */

export const capitaliseWords = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
