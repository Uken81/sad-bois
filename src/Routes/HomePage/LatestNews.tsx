import { NoData } from '../../Components/NoData';
import { Article } from '../../DataLoaders/newsLoader';
import { NewsPage } from '../News/NewsPage';
import { SeeAllLink } from './SeeAllLink';

export const LatestNews: React.FC<{ latestNews: Article[] | null }> = ({ latestNews }) => {
  return (
    <>
      {latestNews ? (
        <section className="xl:mx-4">
          <NewsPage latest={latestNews} />
          <div className="mr-4 xl:mr-36">
            <SeeAllLink destination="/news" text="SEE ALL NEWS" />
          </div>
        </section>
      ) : (
        <section>
          <NoData title="No News Articles Found" />
        </section>
      )}
    </>
  );
};
