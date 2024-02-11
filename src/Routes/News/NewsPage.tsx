import { useLoaderData, useNavigate } from 'react-router';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { Article } from '../../DataLoaders/newsLoader';
import { format } from 'date-fns';
import { ArticleLink } from './ArticleLink';
import { NoData } from '../../Components/NoData';

export const NewsPage: React.FC<{ latest?: Article[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Article[];
  const all = loaderData;
  const articles = latest || all;
  const dateHeading = articles.length === 3 ? 'LATEST NEWS' : 'NEWS';
  const navigate = useNavigate();

  return (
    <>
      {articles.length ? (
        <main className="mx-auto my-10 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-10">
          {articles.map((article) => {
            const { id, img, date, title } = article;
            const formattedDate = format(new Date(date), 'dd/MM/yyyy');
            return (
              <div
                key={id}
                className="card w-72 bg-base-300 shadow-sm shadow-neutral-500 lg:w-80 xl:w-96"
                onClick={() => navigate(`/news/article/${id}`)}>
                <figure>
                  <img src={`../../../public/Assets/News/${img}.png`} alt={title} />
                </figure>
                <div className="card-body">
                  <div className="flex items-center">
                    <span className="mr-2 font-bold">{dateHeading}:</span>
                    <span className="">{formattedDate}</span>
                  </div>
                  <h3 className="card-title text-primary">{capitaliseWords(title)}</h3>
                  <ArticleLink id={id} />
                </div>
              </div>
            );
          })}
        </main>
      ) : (
        <main>
          <NoData title="No News Articles Found" />
        </main>
      )}
    </>
  );
};
