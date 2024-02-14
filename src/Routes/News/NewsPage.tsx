import { useLoaderData } from 'react-router';
import { Article } from '../../DataLoaders/newsLoader';
import { NoData } from '../../Components/NoData';
import { ArticleSummaries } from './ArticleSummaries/ArticleSummaries';

export const NewsPage: React.FC<{ latest?: Article[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Article[];
  const all = loaderData;
  const articles = latest || all;

  return (
    <>
      {articles.length ? (
        <main className="mx-auto my-10 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-10">
          <ArticleSummaries articles={articles} />
        </main>
      ) : (
        <main>
          <NoData title="No News Articles Found" />
        </main>
      )}
    </>
  );
};
