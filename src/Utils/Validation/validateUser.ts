/**
 * A utility function that sends a request to the database to verify a valid user.
 */

import { serverUrl } from '../../Server/serverUrl';
import { DataError } from '../../Types/errorTypes';

interface ValidationResult {
  validationSuccess: boolean;
  message: string;
}

export const validateUser = async (): Promise<boolean> => {
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      credentials: 'include'
    };

    const response = await fetch(`${serverUrl}/auth/validate`, requestOptions);

    if (!response.ok) {
      const dataError: DataError = await response.json();
      throw new Error(`Network response was not ok: ${dataError.message}`);
    }

    const data: ValidationResult = await response.json();

    return data.validationSuccess;
  } catch (error) {
    console.error('Error during user validation:', error);
    return false;
  }
};
