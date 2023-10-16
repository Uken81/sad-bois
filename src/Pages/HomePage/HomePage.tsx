import { useLoaderData, useNavigate } from 'react-router';
import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import './homePage.scss';
import { Article } from '../News/DataLoaders/newsLoader';
import { HomepageLoader } from './homepageLoader';
import { TourInfo } from '../Tour/TourInfo';

export const HomePage: React.FC = () => {
  const homepageLoader = useLoaderData() as HomepageLoader;
  console.log('hopl', homepageLoader);
  const latestNews = homepageLoader.latestNews;
  const tour = homepageLoader.tour;
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
        <TourInfo />
      </section>
    </main>
  );
};
