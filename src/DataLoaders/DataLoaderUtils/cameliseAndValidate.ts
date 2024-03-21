import { camelizeKeys } from 'humps';
import * as yup from 'yup';

export const cameliseAndValidate = async <T>(data: T, schema: yup.Schema): Promise<T> => {
  try {
    const camelisedData = camelizeKeys(data);
    const validatedData: T = await schema.validate(camelisedData);

    if (!validatedData) {
      throw new Error('Validated data is undefined');
    }

    return validatedData;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`Validation errors: ${error.errors}`);
    }

    console.error(error);
    throw new Error(`Failed to validate data: ${error}`);
  }
};
