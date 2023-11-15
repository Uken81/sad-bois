/**
 * A utility function that stores data to the session storage.
 * @param {string} key - the key name of the data to save.
 * @param {unknown} value - the data to be saved under the key name.
 */

export const saveOrUpdateSessionStorage = (key: string, value: unknown) => {
  const stringifiedData = JSON.stringify(value);
  sessionStorage.setItem(key, stringifiedData);
};
