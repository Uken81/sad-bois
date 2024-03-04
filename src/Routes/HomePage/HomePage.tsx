import { useLoaderData } from 'react-router';
import { Banner } from './Banner';
import { HomepageLoader } from '../../DataLoaders/homepageLoaders';
import { LatestNews } from './LatestNews';
import { LatestShows } from './LatestShows';

export const HomePage: React.FC = () => {
  const homepageLoader = useLoaderData() as HomepageLoader;
  const latestNews = homepageLoader.latestNewsData ?? null;
  const latestShows = homepageLoader.latestShowsData ?? null;

  return (
    <main className="mt-6 ">
      <Banner />
      <div className="divider" />
      <LatestNews latestNews={latestNews} />
      <div className="divider" />
      <LatestShows latestShows={latestShows} />
    </main>
  );
};
