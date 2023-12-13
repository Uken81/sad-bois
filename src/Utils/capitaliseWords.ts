/**
 * A utility function that capitalises the first letter of every word in a sentence.
 * @param {string} str - The string to be capitalised and returned.
 */

export const capitaliseWords = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      // Capitalize the first character
      let capitalized = word.charAt(0).toUpperCase() + word.slice(1);

      // Find and capitalize character following a single or double quote
      const quoteIndex = word.indexOf("'") >= 0 ? word.indexOf("'") : word.indexOf('"');
      if (quoteIndex >= 0 && quoteIndex + 1 < word.length) {
        capitalized =
          capitalized.substring(0, quoteIndex + 1) +
          capitalized.charAt(quoteIndex + 1).toUpperCase() +
          capitalized.substring(quoteIndex + 2);
      }

      return capitalized;
    })
    .join(' ');
};
