import * as yup from 'yup';

export const validateData = async <T>(data: T, schema: yup.Schema): Promise<T> => {
  try {
    if (!data) {
      throw new Error('Data is undefined');
    }

    const validatedData: T = await schema.validate(data);

    return validatedData;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to validate data: ${error}`);
  }
};
