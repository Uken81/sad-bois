import { LoaderFunctionArgs } from 'react-router';
import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { serverUrl } from '../Server/serverUrl';
import { showTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { validateParams } from './DataLoaderUtils/validateParams';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { isEmptyObject } from '../Utils/Validation/isEmptyObject';
import { camelizeKeys } from 'humps';
import { validateData } from './DataLoaderUtils/validateData';

export const showLoader = async (loader: LoaderFunctionArgs): Promise<TourType | undefined> => {
  try {
    const id = validateParams(loader.params.id);

    const data: TourType = await fetchLoaderData(`${serverUrl}/tour/byId?id=${id}`);

    if (isEmptyObject(data)) {
      throw new Error('Empty response object');
    }

    const camelisedShow = camelizeKeys(data) as TourType;
    const validatedShow = await validateData(camelisedShow, showTypeSchema);

    return validatedShow;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
