import { throwDataError } from '../../Utils/throwDataError';

export const fetchLoaderData = async <T>(url: string, requestOptions?: RequestInit): Promise<T> => {
  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    await throwDataError(response);
  }

  return await response.json();
};
