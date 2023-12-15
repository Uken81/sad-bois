import { useLoaderData } from 'react-router';
import { Tour } from './tourLoader';
import { format } from 'date-fns';
import { NoTour } from './NoTour';

export const TourInfo: React.FC<{ latest?: Tour[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Tour[];
  const all = loaderData;
  const shows = latest || all;
  console.log('shows', shows);
  if (!shows || shows.length === 0) {
    return <NoTour />;
  }
  return (
    <main className="px-2 sm:px-2 md:px-12 lg:px-8 md:w-screen">
      <h1 className="text-2xl font-bold text-center sm:text-left">UPCOMING SHOWS</h1>
      <h3 className="text-xl text-center md:my-8">Japan Tour</h3>
      <div className="overflow-x-auto md:w-full">
        <table className="md:w-full ">
          <thead className="bg-gray-800 text-white">
            <tr className="text-center">
              <th className="py-2  text-xs font-medium uppercase tracking-wider md:text-lg md:px-6">
                Date
              </th>
              <th className="py-2  text-xs font-medium uppercase tracking-wider md:text-lg md:px-6">
                Location
              </th>
              <th className="ppy-2  text-xs font-medium uppercase tracking-wider md:text-lg md:px-6">
                Venue
              </th>
              <th className="py-2  text-xs font-medium uppercase tracking-wider md:text-lg md:px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-200 ">
            {shows.map((show) => {
              const { id, date, location, venue, ticketStatus } = show;
              const formattedDate = format(new Date(date), 'dd/MM/yyyy');

              return (
                <tr key={id} className="text-yellow-500 text-xs text-center whitespace-normal ">
                  <td className="px-1 py-2 md:text-lg">{formattedDate}</td>
                  <td className="px-1 py-2 md:text-lg">{location}</td>
                  <td className="px-1 py-2 md:text-lg">{venue}</td>
                  <td className="px-1 py-2 md:text-lg">{ticketStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );

  // return (
  //   <main className="">
  //     <h1 className="text-2xl font-bold ">UPCOMING SHOWS</h1>
  //     <h3 className="text-xl">Japan Tour</h3>
  //     <div className="overflow-x-auto max-h-96 bg-black">
  //       <table className="divide-y divide-gray-200 w-full">
  //         <thead className="bg-gray-50">
  //           <tr className="whitespace-normal">
  //             <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //               Date
  //             </th>
  //             <th className="px-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //               Location
  //             </th>
  //             <th className="px-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //               Venue
  //             </th>
  //             <th className="px-0 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //               Status
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody className=" divide-y divide-gray-200 bg-black max-w-sm">
  //           {shows.map((show) => {
  //             const { id, date, location, venue, ticketStatus } = show;
  //             const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  //             return (
  //               <tr key={id} className="text-yellow-500 text-xs whitespace-normal">
  //                 <td className="px-0 py-4">{formattedDate}</td>
  //                 <td className="px-0 py-4  w-1">{location}</td>
  //                 <td className="px-0 py-4">{venue}</td>
  //                 <td className="px-0 py-4">{ticketStatus}</td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //   </main>
  // );
};
