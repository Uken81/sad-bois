import { useLoaderData } from 'react-router';
import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import './homePage.scss';
import { HomepageLoader } from './homepageLoaders';
import { TourInfo } from '../Tour/TourInfo';
import { SeeAllLink } from './SeeAllLink';

export const HomePage: React.FC = () => {
  const homepageLoader = useLoaderData() as HomepageLoader;
  const latestNews = homepageLoader.latestNewsData;
  const latestShows = homepageLoader.latestShowsData;

  return (
    <main>
      <Banner />
      <section>
        <SeeAllLink to="/news" text="SEE ALL NEWS" />
        <NewsPage latest={latestNews} />
      </section>
      <section>
        <SeeAllLink to="/tour" text="SEE ALL SHOWS" />
        <TourInfo latest={latestShows} />
      </section>
    </main>
  );
};
