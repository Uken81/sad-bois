import { useLoaderData, useLocation } from 'react-router';
import { TourType } from '../../DataLoaders/tourLoader';
import { NoTour } from './NoTour';
import { ToursTable } from './Table/ToursTable';

export const Tour: React.FC<{ latest?: TourType[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as TourType[];
  const all = loaderData;
  const shows = latest || all;
  const location = useLocation();
  const variableHeight = location.pathname === '/tour' ? 'h-screen' : null;
  console.log('shows', shows);
  if (!shows || shows.length === 0) {
    return <NoTour />;
  }

  return (
    <main
      className={`flex flex-col bg-stadium bg-cover bg-no-repeat align-middle ${variableHeight}`}>
      <h1 className="mt-2 text-center text-h1 font-h1 tracking-wide text-secondary [text-shadow:1px_1px_2px_#ffffff]">
        THE SAD BOIS UPCOMING SHOWS
      </h1>
      <div className="flex h-full items-center justify-center">
        <div className="overflow-x-auto px-2 text-white opacity-80">
          <ToursTable shows={shows} />
        </div>
      </div>
    </main>
  );
};
