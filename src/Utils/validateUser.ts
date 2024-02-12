/**
 * A utility function that sends a request to the database to verify a valid user.
 */

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

    const response = await fetch(
      'https://sad-bois-backend-637e57975bd5.herokuapp.com/auth/validate',
      requestOptions
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: ValidationResult = await response.json();

    return data.validationSuccess;
  } catch (error) {
    console.error('Error during user validation:', error);
    return false;
  }
};
