import { useLoaderData } from 'react-router';
import { Article } from '../../DataLoaders/newsLoader';
import { NoData } from '../../Components/NoData';
import { ArticleSummaries } from './ArticleSummaries/ArticleSummaries';

export const NewsPage: React.FC<{ latest?: Article[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Article[];
  const isLatest = latest ? true : false;
  const articles = latest || loaderData;

  return (
    <>
      {articles ? (
        <main className="md:gap-18 mx-auto my-10 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 xl:mx-56">
          <ArticleSummaries articles={articles} isLatest={isLatest} />
        </main>
      ) : (
        <main>
          <NoData title="No News Articles Found" />
        </main>
      )}
    </>
  );
};
