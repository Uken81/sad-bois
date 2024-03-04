import { useLoaderData } from 'react-router';
import { TourType } from '../../DataLoaders/tourLoader';
import { ToursTable } from './Table/ToursTable';
import { NoData } from '../../Components/NoData';

export const Tour: React.FC<{ latest?: TourType[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as TourType[];
  const shows = latest || loaderData;
  const variableHeight = latest ? null : 'h-screen';

  return (
    <>
      {shows ? (
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
      ) : (
        <main>
          <NoData title="No Upcoming Tour 😢" />
        </main>
      )}
    </>
  );
};
