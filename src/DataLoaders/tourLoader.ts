import { camelizeKeys } from 'humps';
import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { serverUrl } from '../Server/serverUrl';
import { isEmptyArray } from '../Utils/Validation/isEmptyArray';
import { tourTypeSchema } from './DataLoaderSchemas/dataLoaderSchemas';
import { fetchLoaderData } from './DataLoaderUtils/fetchLoaderData';
import { validateData } from './DataLoaderUtils/validateData';

export const tourLoader = async (): Promise<TourType[] | null | undefined> => {
  try {
    const data: TourType[] = await fetchLoaderData(`${serverUrl}/tour`);

    if (isEmptyArray(data)) {
      return null;
    }

    const camelisedTour = camelizeKeys(data) as TourType[];
    const validatedTour = await validateData(camelisedTour, tourTypeSchema);

    return validatedTour;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
