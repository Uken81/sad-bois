import { useLoaderData } from 'react-router';
import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import { HomepageLoader } from './homepageLoaders';
import { TourInfo } from '../Tour/TourInfo';
import { SeeAllLink } from './SeeAllLink';
import { NoNews } from '../News/NoNews';

export const HomePage: React.FC = () => {
  const homepageLoader = useLoaderData() as HomepageLoader;
  const latestNews = homepageLoader.latestNewsData;
  const latestShows = homepageLoader.latestShowsData;

  return (
    <main>
      <Banner />
      <div className="divider"></div>
      <section className="">
        {latestNews ? <NewsPage latest={latestNews} /> : <NoNews />}
        <SeeAllLink to="/news" text="SEE ALL NEWS" />
      </section>
      <div className="divider"></div>
      <section>
        <TourInfo latest={latestShows} />
        <SeeAllLink to="/tour" text="SEE ALL SHOWS" />
      </section>
    </main>
  );
};
