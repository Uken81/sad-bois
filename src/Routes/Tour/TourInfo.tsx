import { useLoaderData, useLocation } from 'react-router';
import { Tour } from './tourLoader';
import { format } from 'date-fns';
import { NoTour } from './NoTour';

export const TourInfo: React.FC<{ latest?: Tour[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Tour[];
  const all = loaderData;
  const shows = latest || all;
  const location = useLocation();
  const variableHeight = location.pathname === '/tour' ? 'h-screen' : null;

  if (!shows || shows.length === 0) {
    return <NoTour />;
  }

  return (
    <main
      className={`flex flex-col bg-stadium bg-cover bg-no-repeat align-middle ${variableHeight}`}>
      <h1 className="mt-2 text-center text-h1 tracking-wide text-white">
        THE SAD BOIS UPCOMING SHOWS
      </h1>
      <div className="flex h-full items-center justify-center">
        <div className="px-2 text-white md:px-12 lg:px-8">
          <div className="overflow-x-auto opacity-80 md:w-full">
            <table className="my-4">
              <thead className="bg-gray-800 text-white">
                <th colSpan={4}>
                  <h3 className="text-center text-xl md:my-8">Japan Tour 2023</h3>
                </th>
                <tr className="text-center font-medium uppercase ">
                  <th className="py-2 tracking-wider md:px-6 md:text-lg">Date</th>
                  <th className="py-2 tracking-wider md:px-6 md:text-lg">Location</th>
                  <th className="py-2 tracking-wider md:px-6 md:text-lg">Venue</th>
                  <th className="py-2 tracking-wider md:px-6 md:text-lg">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-black ">
                {shows.map((show) => {
                  const { id, date, location, venue, ticketStatus } = show;
                  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

                  return (
                    <tr key={id} className="whitespace-normal text-center text-xs text-yellow-500">
                      <td className="px-1 py-2 md:text-lg">{formattedDate}</td>
                      <td className="px-1 py-2 md:text-lg">{location}</td>
                      <td className="px-1 py-2 md:text-lg">{venue}</td>

                      <td
                        className="cursor-pointer px-2 py-2 text-yellow-500 underline duration-500 hover:bg-yellow-500 hover:text-black md:text-lg"
                        onClick={() => console.log('test')}>
                        <div className="border-black hover:md:border-l-2">{ticketStatus}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};
