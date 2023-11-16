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

    const respone = await fetch('http://localhost:2001/auth/validate', requestOptions);
    console.log('respone: ', respone);

    if (!respone.ok) {
      throw new Error('Network response was not ok');
    }

    const data: ValidationResult = await respone.json();
    console.log('validationSuccess: ', data.validationSuccess);
    console.log('validationMesage: ', data.message);

    return data.validationSuccess;
  } catch (error) {
    console.error('Error during user validation:', error);
    throw error;
  }
};
