import { NoData } from '../../Components/NoData';
import { TourType } from '../../DataLoaders/tourLoader';
import { Tour } from '../Tour/Tour';
import { SeeAllLink } from './SeeAllLink';

export const LatestShows: React.FC<{ latestShows: TourType[] | null }> = ({ latestShows }) => {
  return (
    <>
      {latestShows ? (
        <section className="w-screen">
          <Tour latest={latestShows} />
          <div className="mb-4 mt-8 md:mr-12">
            <SeeAllLink destination="/tour" text="SEE ALL SHOWS" />
          </div>
          <div className="divider" />
        </section>
      ) : (
        <section>
          <NoData title="No Shows found" />
        </section>
      )}
    </>
  );
};
