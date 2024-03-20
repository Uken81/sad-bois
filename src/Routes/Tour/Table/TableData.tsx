import { format } from 'date-fns';
import { useNavigate } from 'react-router';
import { TourType } from '../../RouteWrappers/TourWrapper';

export const TableData: React.FC<{ shows: TourType[] }> = ({ shows }) => {
  const navigate = useNavigate();

  return (
    <>
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
              <div
                className="border-black hover:md:border-l-2"
                onClick={() => navigate(`/tour/add-ticket/${id}`)}>
                {ticketStatus}
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};
