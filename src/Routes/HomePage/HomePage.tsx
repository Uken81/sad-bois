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
    <main className="mt-1 ">
      <Banner />
      <div className="divider" />
      <section className="mx-8">
        {latestNews ? <NewsPage latest={latestNews} /> : <NoNews />}
        <div className="mr-4">
          <SeeAllLink destination="/news" text="SEE ALL NEWS" />
        </div>
      </section>
      <div className="divider" />
      <section className="w-screen">
        <TourInfo latest={latestShows} />
        <div className="mb-4 mr-14 mt-8">
          <SeeAllLink destination="/tour" text="SEE ALL SHOWS" />
        </div>
        <div className="divider" />
      </section>
    </main>
  );
};
