export const validateParams = (params: string | undefined) => {
  if (!params || params === '') {
    throw new Error('Error: Invalid params.');
  }
};
