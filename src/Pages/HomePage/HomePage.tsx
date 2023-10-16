import { useLoaderData } from 'react-router';
import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import './homePage.scss';
import { Article } from '../News/DataLoaders/newsLoader';

export const HomePage: React.FC = () => {
  const latestNews = useLoaderData() as Article[];

  return (
    <main>
      <Banner />
      <NewsPage latest={latestNews} />
    </main>
  );
};
