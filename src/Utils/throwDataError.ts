import { DataError } from '../Types/errorTypes';

export const throwDataError = async (response: Response) => {
  const dataError: DataError = await response.json();
  console.error(`Network response was not ok: ${dataError.message}`);
  throw new Error(`Network response was not ok: ${dataError.message}`);
};
