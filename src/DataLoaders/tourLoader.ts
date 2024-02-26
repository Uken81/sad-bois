import { serverUrl } from '../Server/serverUrl';
import { DataError } from '../Types/errorTypes';
import { cameliseTourData } from './DataLoaderUtils/cameliseTourData';

export interface TourType {
  id: string;
  date: Date;
  location: string;
  venue: string;
  ticketStatus: 'pending' | 'onsale' | 'postponed';
}

export const tourLoader = async (): Promise<TourType[] | undefined> => {
  try {
    const response = await fetch(`${serverUrl}/tour`);
    if (!response.ok) {
      const data: DataError = await response.json();
      throw new Error(`HTTP error! ${data.error}`);
    }

    const tour = await response.json();
    const camelisedTour = await cameliseTourData(tour);

    return camelisedTour;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error}`);
      throw new Error(`${error}`);
    }

    console.error('An unexpected error occurred:', error);
  }
};
