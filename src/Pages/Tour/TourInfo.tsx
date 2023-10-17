import { Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Tour } from './DataLoaders/tourLoader';
import { format } from 'date-fns';

export const TourInfo: React.FC<{ latest?: Tour[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Tour[];
  const all = loaderData;
  const shows = latest || all;

  return (
    <main>
      <h1>UPCOMING SHOWS</h1>

      <Table variant="dark" hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Venue</th>
            <th>Status</th>
          </tr>
        </thead>
        {shows.map((show) => {
          const { id, date, location, venue, ticketStatus } = show;
          const formattedDate = format(new Date(date), 'dd/MM/yyyy');

          return (
            <tbody key={id}>
              <tr>
                <td>{formattedDate}</td>
                <td>{location}</td>
                <td>{venue}</td>
                <td>{ticketStatus}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </main>
  );
};
