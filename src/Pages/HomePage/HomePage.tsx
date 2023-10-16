import { useLoaderData, useNavigate } from 'react-router';
import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import './homePage.scss';
import { Article } from '../News/DataLoaders/newsLoader';

export const HomePage: React.FC = () => {
  const latestNews = useLoaderData() as Article[];
  const navigate = useNavigate();

  return (
    <main>
      <Banner />
      <section>
        <span onClick={() => navigate('/news')}>SEE ALL NEWS</span>
        <NewsPage latest={latestNews} />
      </section>
    </main>
  );
};
