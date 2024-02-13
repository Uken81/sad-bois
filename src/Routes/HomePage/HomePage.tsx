// import { useLoaderData } from 'react-router';
// import { NewsPage } from '../News/NewsPage';
import { Banner } from './Banner';
// import { HomepageLoader } from '../../DataLoaders/homepageLoaders';
// import { Tour } from '../Tour/Tour';
import { SeeAllLink } from './SeeAllLink';
// import { NoData } from '../../Components/NoData';

export const HomePage: React.FC = () => {
  // const homepageLoader = useLoaderData() as HomepageLoader;
  // const latestNews = homepageLoader.latestNewsData?.length ? homepageLoader.latestNewsData : null;
  // const latestShows = homepageLoader.latestShowsData?.length
  //   ? homepageLoader.latestShowsData
  //   : null;

  return (
    <main className="mt-1 ">
      <Banner />
      <div className="divider" />
      <section className="mx-8">
        {/* {latestNews ? <NewsPage latest={latestNews} /> : <NoData title="No News Articles Found" />} */}
        <div className="mr-4">
          <SeeAllLink destination="/news" text="SEE ALL NEWS" />
        </div>
      </section>
      <div className="divider" />
      <section className="w-screen">
        {/* {latestShows ? <Tour latest={latestShows} /> : <NoData title="No Shows found" />} */}
        <div className="mb-4 mt-8 md:mr-12">
          <SeeAllLink destination="/tour" text="SEE ALL SHOWS" />
        </div>
        <div className="divider" />
      </section>
    </main>
  );
};
