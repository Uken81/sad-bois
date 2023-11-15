/**
 * A utility function that retrieves data from session storage.
 * @param {string} keyName - The string to be capitalised and returned.
 */

export const getSessionData = (keyName: string) => {
  const data = sessionStorage.getItem(keyName);
  return data;
};
