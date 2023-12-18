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
    <main className="bg-black">
      <div
        className={`flex flex-col justify-center items-center bg-stadium bg-no-repeat bg-cover ${variableHeight} w-4/5`}>
        <h1 className="text-2xl text-white font-bold text-center tracking-wide mt-2 sm:text-left">
          THE SAD BOIS UPCOMING SHOWS
        </h1>

        <div className="flex justify-center items-center h-full">
          <div className="px-2 text-white sm:px-2 md:px-12 lg:px-8">
            <div className="overflow-x-auto opacity-80 md:w-full">
              <table>
                <thead className="bg-gray-800 text-white">
                  <th colSpan={4}>
                    <h3 className="text-xl text-center md:my-8">Japan Tour 2023</h3>
                  </th>
                  <tr className="text-center uppercase font-medium ">
                    <th className="py-2 tracking-wider md:text-lg md:px-6">Date</th>
                    <th className="py-2 tracking-wider md:text-lg md:px-6">Location</th>
                    <th className="py-2 tracking-wider md:text-lg md:px-6">Venue</th>
                    <th className="py-2 tracking-wider md:text-lg md:px-6">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-black divide-y divide-gray-200 ">
                  {shows.map((show) => {
                    const { id, date, location, venue, ticketStatus } = show;
                    const formattedDate = format(new Date(date), 'dd/MM/yyyy');

                    return (
                      <tr
                        key={id}
                        className="text-yellow-500 text-xs text-center whitespace-normal">
                        <td className="px-1 py-2 md:text-lg">{formattedDate}</td>
                        <td className="px-1 py-2 md:text-lg">{location}</td>
                        <td className="px-1 py-2 md:text-lg">{venue}</td>

                        <td
                          className="  px-2 py-2 md:text-lg text-yellow-500 hover:text-black hover:bg-yellow-500 cursor-pointer duration-500"
                          onClick={() => console.log('test')}>
                          <div className="hover:md:border-l-2 border-black">{ticketStatus}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
