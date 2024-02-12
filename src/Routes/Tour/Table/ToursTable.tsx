import { TourType } from '../../../DataLoaders/tourLoader';
import { ColumnHeaders } from './ColumnHeaders';
import { TableData } from './TableData';

export const ToursTable: React.FC<{ shows: TourType[] }> = ({ shows }) => {
  return (
    <table className="my-4 rounded-lg border border-secondary">
      <thead className="bg-base-300 text-white">
        <tr>
          <th colSpan={4}>
            <p className="text-center text-xl text-accent [text-shadow:1px_1px_5px_#ffffff] md:my-8 md:text-2xl lg:text-4xl">
              Japan Tour 2023
            </p>
          </th>
        </tr>
        <ColumnHeaders />
      </thead>
      <tbody className="divide-y divide-gray-200 bg-black">
        <TableData shows={shows} />
      </tbody>
    </table>
  );
};
