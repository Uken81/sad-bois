import { TourType } from '../Routes/RouteWrappers/TourWrapper';
import { serverUrl } from '../Server/serverUrl';
import { throwDataError } from '../Utils/throwDataError';
import { cameliseTourData } from './DataLoaderUtils/cameliseTourData';

export const tourLoader = async (): Promise<TourType[] | null | undefined> => {
  try {
    const response = await fetch(`${serverUrl}/tour`);
    if (!response.ok) {
      await throwDataError(response);
    }

    const tour: TourType[] = await response.json();
    if (!tour.length) {
      return null;
    }

    const camelisedTour = await cameliseTourData(tour);

    return camelisedTour;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
    throw new Error(`${error}`);
  }
};
