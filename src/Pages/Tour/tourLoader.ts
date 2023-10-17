export interface Tour {
  id: string;
  date: Date;
  location: string;
  venue: string;
  ticketStatus: 'pending' | 'onsale' | 'postponed';
}

export const tourLoader = async (): Promise<Tour[]> => {
  const response = await fetch('http://localhost:2001/tour');
  const tour = await response.json();

  return tour;
};
