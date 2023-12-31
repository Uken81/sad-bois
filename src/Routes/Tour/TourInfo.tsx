import { Table } from 'react-bootstrap';
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
