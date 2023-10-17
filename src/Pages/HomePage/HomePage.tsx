import { useLoaderData, useNavigate } from 'react-router';
import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import './homePage.scss';
import { HomepageLoader } from './homepageLoader';
import { TourInfo } from '../Tour/TourInfo';

export const HomePage: React.FC = () => {
  const homepageLoader = useLoaderData() as HomepageLoader;
  console.log('HPL', homepageLoader);
  const latestNews = homepageLoader.latestNewsData;
  const latestShows = homepageLoader.latestShowsData;
  const navigate = useNavigate();

  return (
    <main>
      <Banner />
      <section>
        <span onClick={() => navigate('/news')}>SEE ALL NEWS</span>
        <NewsPage latest={latestNews} />
      </section>
      <section>
        <span onClick={() => navigate('/tour')}>SEE ALL SHOWS</span>
        <TourInfo latest={latestShows} />
      </section>
    </main>
  );
};
