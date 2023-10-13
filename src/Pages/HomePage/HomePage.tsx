import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
import './homePage.scss';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Banner />
      <NewsPage onlyLatest={true} />
    </main>
  );
};
