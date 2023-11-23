import { DataError } from '../../Types/loaderTypes';

export interface Tour {
  id: string;
  date: Date;
  location: string;
  venue: string;
  ticketStatus: 'pending' | 'onsale' | 'postponed';
}

export const tourLoader = async (): Promise<Tour[] | undefined> => {
  try {
    const response = await fetch('http://localhost:2001/tour');
    if (!response.ok) {
      const data: DataError = await response.json();
      throw new Error(`HTTP error! ${data.error}`);
    }

    const tour = await response.json();

    return tour;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return;
    }

    console.error('An unexpected error occurred:', error);
  }
};
