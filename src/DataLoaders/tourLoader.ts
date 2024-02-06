import { DataError } from '../Types/loaderTypes';
import humps from 'humps';

export interface TourType {
  id: string;
  date: Date;
  location: string;
  venue: string;
  ticketStatus: 'pending' | 'onsale' | 'postponed';
}

export const tourLoader = async (): Promise<TourType[] | undefined> => {
  try {
    const response = await fetch('https://sad-bois-backend-637e57975bd5.herokuapp.com/tour');
    if (!response.ok) {
      const data: DataError = await response.json();
      throw new Error(`HTTP error! ${data.error}`);
    }

    const tour = await response.json();
    const camelisedTour = humps.camelizeKeys(tour) as TourType[];

    return camelisedTour;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
