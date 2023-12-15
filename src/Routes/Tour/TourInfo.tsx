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
    <main className=" px-2 sm:px-2 lg:px-8">
      <h1 className="text-2xl font-bold text-center sm:text-left">UPCOMING SHOWS</h1>
      <h3 className="text-xl text-center sm:text-left">Japan Tour</h3>
      <div className="overflow-x-auto ">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-1 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Date
              </th>
              <th className="px-1 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Location
              </th>
              <th className="px-5 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Venue
              </th>
              <th className="px-1 py-2 text-left text-xs font-medium uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-200">
            {shows.map((show) => {
              const { id, date, location, venue, ticketStatus } = show;
              const formattedDate = format(new Date(date), 'dd/MM/yyyy');

              return (
                <tr key={id} className="text-yellow-500 text-xs whitespace-normal">
                  <td className="px-1 py-2">{formattedDate}</td>
                  <td className="px-1 py-2">{location}</td>
                  <td className="px-1 py-2">{venue}</td>
                  <td className="px-1 py-2">{ticketStatus}</td>
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
