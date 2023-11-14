export const saveOrUpdateLocalStorage = (key: string, value: unknown) => {
  const stringifiedData = JSON.stringify(value);
  localStorage.setItem(key, stringifiedData);
};
